import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/radio/radio.js';

export interface RadioProps extends BaseProps {
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  name?: string;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
}

// Radio
export const Radio = createComponent<HTMLElement, RadioProps>('md-radio');
