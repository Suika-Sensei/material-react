import { createComponent, BaseProps } from "../utils/createComponent";

// Import web components
import "@material/web/labs/navigationbar/navigation-bar.js";
import "@material/web/labs/navigationtab/navigation-tab.js";

export interface NavigationBarProps extends BaseProps {
  activeIndex?: number;
  hideInactiveLabels?: boolean;
  onNavigationTabActivated?: (event: Event) => void;
}

export interface NavigationTabProps extends BaseProps {
  active?: boolean;
  hideInactiveLabel?: boolean;
  disabled?: boolean;
  label?: string;
  badgeValue?: string;
  showBadge?: boolean;
  onClick?: (event: Event) => void;
}

// Navigation Bar
export const NavigationBar = createComponent<HTMLElement, NavigationBarProps>(
  "md-navigation-bar"
);

// Navigation Tab
export const NavigationTab = createComponent<HTMLElement, NavigationTabProps>(
  "md-navigation-tab"
);
