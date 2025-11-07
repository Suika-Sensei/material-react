import { createComponent, BaseProps } from '../utils/createComponent';

// Import web components
import '@material/web/slider/slider.js';

export interface SliderProps extends BaseProps {
  disabled?: boolean;
  min?: number;
  max?: number;
  value?: number;
  valueStart?: number;
  valueEnd?: number;
  valueLabel?: string;
  valueLabelStart?: string;
  valueLabelEnd?: string;
  step?: number;
  ticks?: boolean;
  labeled?: boolean;
  range?: boolean;
  name?: string;
  nameStart?: string;
  nameEnd?: string;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
}

// Slider
export const Slider = createComponent<HTMLElement, SliderProps>('md-slider');
