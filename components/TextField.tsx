import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field.js';

export interface TextFieldProps extends BaseProps {
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  label?: string;
  required?: boolean;
  value?: string;
  prefixText?: string;
  suffixText?: string;
  hasLeadingIcon?: boolean;
  hasTrailingIcon?: boolean;
  supportingText?: string;
  textDirection?: 'ltr' | 'rtl';
  rows?: number;
  cols?: number;
  inputMode?: string;
  max?: string;
  maxLength?: number;
  min?: string;
  minLength?: number;
  noSpinner?: boolean;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  multiple?: boolean;
  step?: string;
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'textarea';
  autocomplete?: string;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onFocus?: (event: Event) => void;
  onBlur?: (event: Event) => void;
}

// Filled Text Field
export const FilledTextField = createComponent<HTMLElement, TextFieldProps>('md-filled-text-field');

// Outlined Text Field
export const OutlinedTextField = createComponent<HTMLElement, TextFieldProps>('md-outlined-text-field');
