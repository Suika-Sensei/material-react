import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/checkbox/checkbox.js';

export interface CheckboxProps extends BaseProps {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  required?: boolean;
  value?: string;
  name?: string;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
}

// Checkbox
export const Checkbox = createComponent<HTMLElement, CheckboxProps>('md-checkbox');
