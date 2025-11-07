import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/iconbutton/icon-button.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/iconbutton/outlined-icon-button.js';

export interface IconButtonProps extends BaseProps {
  disabled?: boolean;
  toggle?: boolean;
  selected?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  onClick?: (event: Event) => void;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
}

// Standard Icon Button
export const IconButton = createComponent<HTMLElement, IconButtonProps>('md-icon-button');

// Filled Icon Button
export const FilledIconButton = createComponent<HTMLElement, IconButtonProps>('md-filled-icon-button');

// Filled Tonal Icon Button
export const FilledTonalIconButton = createComponent<HTMLElement, IconButtonProps>('md-filled-tonal-icon-button');

// Outlined Icon Button
export const OutlinedIconButton = createComponent<HTMLElement, IconButtonProps>('md-outlined-icon-button');
