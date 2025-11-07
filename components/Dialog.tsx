import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/dialog/dialog.js';

export interface DialogProps extends BaseProps {
  open?: boolean;
  quick?: boolean;
  returnValue?: string;
  type?: 'alert' | 'confirm' | 'prompt';
  noFocusTrap?: boolean;
  onOpening?: (event: Event) => void;
  onOpened?: (event: Event) => void;
  onClosing?: (event: Event) => void;
  onClosed?: (event: Event) => void;
  onCancel?: (event: Event) => void;
}

// Dialog
export const Dialog = createComponent<HTMLElement, DialogProps>('md-dialog');
