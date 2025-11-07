import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';

export interface ListProps extends BaseProps {
  // List - container for list items
}

export interface ListItemProps extends BaseProps {
  disabled?: boolean;
  type?: 'text' | 'button' | 'link';
  href?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  headline?: string;
  supportingText?: string;
  trailingSupportingText?: string;
  multiLineSupportingText?: boolean;
  onClick?: (event: Event) => void;
}

// List
export const List = createComponent<HTMLElement, ListProps>('md-list');

// List Item
export const ListItem = createComponent<HTMLElement, ListItemProps>('md-list-item');
