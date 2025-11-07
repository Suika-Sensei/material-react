import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
import '@material/web/menu/sub-menu.js';

export interface MenuProps extends BaseProps {
  anchor?: string;
  positioning?: 'absolute' | 'fixed' | 'document' | 'popover';
  quick?: boolean;
  hasOverflow?: boolean;
  open?: boolean;
  xOffset?: number;
  yOffset?: number;
  typeaheadDelay?: number;
  anchorCorner?: 'end-start' | 'end-end' | 'start-start' | 'start-end';
  menuCorner?: 'end-start' | 'end-end' | 'start-start' | 'start-end';
  stayOpenOnOutsideClick?: boolean;
  stayOpenOnFocusout?: boolean;
  skipRestoreFocus?: boolean;
  defaultFocus?: 'none' | 'list-root' | 'first-item' | 'last-item';
  onOpening?: (event: Event) => void;
  onOpened?: (event: Event) => void;
  onClosing?: (event: Event) => void;
  onClosed?: (event: Event) => void;
}

export interface MenuItemProps extends BaseProps {
  disabled?: boolean;
  type?: 'text' | 'button' | 'link';
  href?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  headline?: string;
  supportingText?: string;
  trailingSupportingText?: string;
  keepOpen?: boolean;
  selected?: boolean;
  onClick?: (event: Event) => void;
}

export interface SubMenuProps extends BaseProps {
  anchorCorner?: 'end-start' | 'end-end' | 'start-start' | 'start-end';
  menuCorner?: 'end-start' | 'end-end' | 'start-start' | 'start-end';
  hoverOpenDelay?: number;
  hoverCloseDelay?: number;
}

// Menu
export const Menu = createComponent<HTMLElement, MenuProps>('md-menu');

// Menu Item
export const MenuItem = createComponent<HTMLElement, MenuItemProps>('md-menu-item');

// Sub Menu
export const SubMenu = createComponent<HTMLElement, SubMenuProps>('md-sub-menu');
