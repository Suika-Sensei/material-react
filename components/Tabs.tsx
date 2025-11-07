import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';
import '@material/web/tabs/secondary-tab.js';

export interface TabsProps extends BaseProps {
  activeTabIndex?: number;
  autoActivate?: boolean;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
}

export interface TabProps extends BaseProps {
  active?: boolean;
  hasIcon?: boolean;
  iconOnly?: boolean;
  disabled?: boolean;
  inlineIcon?: boolean;
  onClick?: (event: Event) => void;
}

// Tabs
export const Tabs = createComponent<HTMLElement, TabsProps>('md-tabs');

// Primary Tab
export const PrimaryTab = createComponent<HTMLElement, TabProps>('md-primary-tab');

// Secondary Tab
export const SecondaryTab = createComponent<HTMLElement, TabProps>('md-secondary-tab');
