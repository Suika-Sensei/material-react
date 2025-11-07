import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/chips/chip-set.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/chips/filter-chip.js';
import '@material/web/chips/input-chip.js';
import '@material/web/chips/suggestion-chip.js';

export interface ChipSetProps extends BaseProps {
  // Chip Set - container for chips
}

export interface ChipProps extends BaseProps {
  disabled?: boolean;
  label?: string;
  elevated?: boolean;
  href?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  onClick?: (event: Event) => void;
}

export interface FilterChipProps extends ChipProps {
  selected?: boolean;
  removable?: boolean;
  onRemove?: (event: Event) => void;
}

export interface InputChipProps extends ChipProps {
  avatar?: boolean;
  removeOnly?: boolean;
  selected?: boolean;
  onRemove?: (event: Event) => void;
}

// Chip Set
export const ChipSet = createComponent<HTMLElement, ChipSetProps>('md-chip-set');

// Assist Chip
export const AssistChip = createComponent<HTMLElement, ChipProps>('md-assist-chip');

// Filter Chip
export const FilterChip = createComponent<HTMLElement, FilterChipProps>('md-filter-chip');

// Input Chip
export const InputChip = createComponent<HTMLElement, InputChipProps>('md-input-chip');

// Suggestion Chip
export const SuggestionChip = createComponent<HTMLElement, ChipProps>('md-suggestion-chip');
