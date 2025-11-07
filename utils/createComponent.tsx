import React, { useEffect, useRef, forwardRef } from 'react';

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  slot?: string;
}

/**
 * Creates a React component wrapper for Material Design 3 web component
 * @param tagName - web component tag name (e.g., 'md-filled-button')
 * @returns React component
 */
export function createComponent<T extends HTMLElement, P extends BaseProps = BaseProps>(
  tagName: string
) {
  return forwardRef<T, P>((props, ref) => {
    const { children, ...rest } = props;
    const elementRef = useRef<T>(null);

    // Merge passed ref with internal ref
    useEffect(() => {
      if (ref && elementRef.current) {
        if (typeof ref === 'function') {
          ref(elementRef.current);
        } else {
          (ref as React.RefObject<T>).current = elementRef.current;
        }
      }
    }, [ref]);

    // Handle events and properties of the web component
    useEffect(() => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const entries = Object.entries(rest);

      entries.forEach(([key, value]) => {
        // Handle events (start with 'on')
        if (key.startsWith('on') && typeof value === 'function') {
          const eventName = key.substring(2).toLowerCase();
          element.addEventListener(eventName, value as EventListener);
          return;
        }

        // Set properties and attributes
        if (key in element) {
          // Set as property if it exists
          (element as any)[key] = value;
        } else if (typeof value === 'boolean') {
          // Boolean values as attributes
          if (value) {
            element.setAttribute(key, '');
          } else {
            element.removeAttribute(key);
          }
        } else if (value !== null && value !== undefined) {
          // Other values as attributes
          element.setAttribute(key, String(value));
        }
      });

      // Cleanup event listeners
      return () => {
        entries.forEach(([key, value]) => {
          if (key.startsWith('on') && typeof value === 'function') {
            const eventName = key.substring(2).toLowerCase();
            element.removeEventListener(eventName, value as EventListener);
          }
        });
      };
    }, [rest]);

    return React.createElement(tagName, { ref: elementRef }, children);
  });
}
