import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/divider/divider.js';

export interface DividerProps extends BaseProps {
  inset?: boolean;
  insetStart?: boolean;
  insetEnd?: boolean;
}

// Divider
export const Divider = createComponent<HTMLElement, DividerProps>('md-divider');
