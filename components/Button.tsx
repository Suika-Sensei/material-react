import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-tonal-button.js';

export interface ButtonProps extends BaseProps {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  trailingIcon?: boolean;
  hasIcon?: boolean;
  onClick?: (event: Event) => void;
}

// Filled Button (primary button)
export const FilledButton = createComponent<HTMLElement, ButtonProps>('md-filled-button');

// Outlined Button (outlined button)
export const OutlinedButton = createComponent<HTMLElement, ButtonProps>('md-outlined-button');

// Text Button (text button)
export const TextButton = createComponent<HTMLElement, ButtonProps>('md-text-button');

// Elevated Button (elevated button)
export const ElevatedButton = createComponent<HTMLElement, ButtonProps>('md-elevated-button');

// Filled Tonal Button (tonal button)
export const FilledTonalButton = createComponent<HTMLElement, ButtonProps>('md-filled-tonal-button');
