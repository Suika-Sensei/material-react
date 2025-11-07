import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/select/filled-select.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';

export interface SelectProps extends BaseProps {
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  label?: string;
  required?: boolean;
  value?: string;
  selectedIndex?: number;
  hasLeadingIcon?: boolean;
  displayText?: string;
  menuAlign?: 'start' | 'end';
  quick?: boolean;
  supportingText?: string;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onOpening?: (event: Event) => void;
  onOpened?: (event: Event) => void;
  onClosing?: (event: Event) => void;
  onClosed?: (event: Event) => void;
}

export interface SelectOptionProps extends BaseProps {
  disabled?: boolean;
  selected?: boolean;
  value?: string;
  headline?: string;
  supportingText?: string;
  trailingSupportingText?: string;
  type?: 'text' | 'button';
}

// Filled Select
export const FilledSelect = createComponent<HTMLElement, SelectProps>('md-filled-select');

// Outlined Select
export const OutlinedSelect = createComponent<HTMLElement, SelectProps>('md-outlined-select');

// Select Option
export const SelectOption = createComponent<HTMLElement, SelectOptionProps>('md-select-option');
