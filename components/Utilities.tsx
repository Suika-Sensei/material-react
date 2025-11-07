import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/elevation/elevation.js';
import '@material/web/ripple/ripple.js';
import '@material/web/focus/md-focus-ring.js';

export interface ElevationProps extends BaseProps {
  // Elevation component for creating shadows
}

export interface RippleProps extends BaseProps {
  disabled?: boolean;
  // Ripple effect component
}

export interface FocusRingProps extends BaseProps {
  visible?: boolean;
  inward?: boolean;
  // Focus ring component
}

// Elevation
export const Elevation = createComponent<HTMLElement, ElevationProps>('md-elevation');

// Ripple
export const Ripple = createComponent<HTMLElement, RippleProps>('md-ripple');

// Focus Ring
export const FocusRing = createComponent<HTMLElement, FocusRingProps>('md-focus-ring');
