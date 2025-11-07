import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/switch/switch.js';

export interface SwitchProps extends BaseProps {
  selected?: boolean;
  disabled?: boolean;
  icons?: boolean;
  showOnlySelectedIcon?: boolean;
  required?: boolean;
  value?: string;
  name?: string;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
}

// Switch
export const Switch = createComponent<HTMLElement, SwitchProps>('md-switch');
