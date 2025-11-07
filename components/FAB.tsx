import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/fab/fab.js';
import '@material/web/fab/branded-fab.js';

export interface FABProps extends BaseProps {
  variant?: 'surface' | 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  lowered?: boolean;
  href?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  onClick?: (event: Event) => void;
}

// Standard FAB
export const FAB = createComponent<HTMLElement, FABProps>('md-fab');

// Branded FAB
export const BrandedFAB = createComponent<HTMLElement, FABProps>('md-branded-fab');
