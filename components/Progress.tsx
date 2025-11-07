import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/progress/linear-progress.js';
import '@material/web/progress/circular-progress.js';

export interface LinearProgressProps extends BaseProps {
  buffer?: number;
  max?: number;
  value?: number;
  indeterminate?: boolean;
  fourColor?: boolean;
}

export interface CircularProgressProps extends BaseProps {
  max?: number;
  value?: number;
  indeterminate?: boolean;
  fourColor?: boolean;
}

// Linear Progress
export const LinearProgress = createComponent<HTMLElement, LinearProgressProps>('md-linear-progress');

// Circular Progress
export const CircularProgress = createComponent<HTMLElement, CircularProgressProps>('md-circular-progress');
