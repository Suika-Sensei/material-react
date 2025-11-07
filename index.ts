// Material Design 3 React Components Library
// Wrappers for @material/web components

// Utility
export { createComponent, type BaseProps } from "./utils/createComponent";

// Buttons
export {
  FilledButton,
  OutlinedButton,
  TextButton,
  ElevatedButton,
  FilledTonalButton,
  type ButtonProps,
} from "./components/Button";

// Icon Buttons
export {
  IconButton,
  FilledIconButton,
  FilledTonalIconButton,
  OutlinedIconButton,
  type IconButtonProps,
} from "./components/IconButton";

// FAB (Floating Action Button)
export { FAB, BrandedFAB, type FABProps } from "./components/FAB";

// Text Fields
export {
  FilledTextField,
  OutlinedTextField,
  type TextFieldProps,
} from "./components/TextField";

// Select
export {
  FilledSelect,
  OutlinedSelect,
  SelectOption,
  type SelectProps,
  type SelectOptionProps,
} from "./components/Select";

// Checkbox
export { Checkbox, type CheckboxProps } from "./components/Checkbox";

// Radio
export { Radio, type RadioProps } from "./components/Radio";

// Switch
export { Switch, type SwitchProps } from "./components/Switch";

// Chips
export {
  ChipSet,
  AssistChip,
  FilterChip,
  InputChip,
  SuggestionChip,
  type ChipSetProps,
  type ChipProps,
  type FilterChipProps,
  type InputChipProps,
} from "./components/Chips";

// List
export {
  List,
  ListItem,
  type ListProps,
  type ListItemProps,
} from "./components/List";

// Menu
export {
  Menu,
  MenuItem,
  SubMenu,
  type MenuProps,
  type MenuItemProps,
  type SubMenuProps,
} from "./components/Menu";

// Dialog
export { Dialog, type DialogProps } from "./components/Dialog";

// Progress
export {
  LinearProgress,
  CircularProgress,
  type LinearProgressProps,
  type CircularProgressProps,
} from "./components/Progress";

// Slider
export { Slider, type SliderProps } from "./components/Slider";

// Divider
export { Divider, type DividerProps } from "./components/Divider";

// Tabs
export {
  Tabs,
  PrimaryTab,
  SecondaryTab,
  type TabsProps,
  type TabProps,
} from "./components/Tabs";

// Navigation
export {
  NavigationBar,
  NavigationTab,
  type NavigationBarProps,
  type NavigationTabProps,
} from "./components/Navigation";

// Icon
export { Icon, type IconProps, type IconVariant } from "./components/Icon";

// Utilities
export {
  Elevation,
  Ripple,
  FocusRing,
  type ElevationProps,
  type RippleProps,
  type FocusRingProps,
} from "./components/Utilities";

// Styles
export { Styles } from "./styles";
export { default as styles } from "./styles";
