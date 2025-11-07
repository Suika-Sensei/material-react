# Material React Web

React wrappers for [Material Web Components](https://github.com/material-components/material-web) (Material Design 3).

## Description

This library provides ready-to-use React components that wrap Material Design 3 web components. All components are fully typed with TypeScript and easily integrate into React applications.

## Installation

### From GitHub

```bash
npm install github:suika-sensei/material-react
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@material-react/web": "github:suika-sensei/material-react"
  }
}
```

### Prerequisites

Make sure you have `@material/web` installed:

```bash
npm install @material/web
```

## Usage

### Basic Example

```tsx
import { FilledButton, OutlinedTextField } from "@material-react/web";

function MyComponent() {
  const [name, setName] = useState("");

  return (
    <div>
      <OutlinedTextField
        label="Enter your name"
        value={name}
        onInput={(e) => setName(e.target.value)}
      />

      <FilledButton onClick={() => console.log("Clicked!")}>
        Submit
      </FilledButton>
    </div>
  );
}
```

## Available Components

### Buttons

- `FilledButton` - filled button (primary action)
- `OutlinedButton` - outlined button
- `TextButton` - text button
- `ElevatedButton` - elevated button
- `FilledTonalButton` - tonal button

```tsx
<FilledButton disabled={false} onClick={handleClick}>
  Click me
</FilledButton>
```

### Icon Buttons

- `IconButton` - standard icon button
- `FilledIconButton` - filled icon button
- `FilledTonalIconButton` - tonal icon button
- `OutlinedIconButton` - outlined icon button

```tsx
<IconButton onClick={handleClick}>
  <Icon name="favorite" />
</IconButton>
```

### FAB (Floating Action Button)

- `FAB` - floating action button
- `BrandedFAB` - branded FAB

```tsx
<FAB size="medium" label="Add">
  <Icon name="add" />
</FAB>
```

### Text Fields

- `FilledTextField` - filled text field
- `OutlinedTextField` - outlined text field

```tsx
<OutlinedTextField
  label="Email"
  type="email"
  required
  error={hasError}
  errorText="Invalid email"
  onInput={(e) => handleInput(e)}
/>
```

### Select

- `FilledSelect` - filled select
- `OutlinedSelect` - outlined select
- `SelectOption` - select option

```tsx
<OutlinedSelect label="Choose option">
  <SelectOption value="1" headline="Option 1" />
  <SelectOption value="2" headline="Option 2" />
  <SelectOption value="3" headline="Option 3" />
</OutlinedSelect>
```

### Form Controls

- `Checkbox` - checkbox
- `Radio` - radio button
- `Switch` - switch toggle

```tsx
<Checkbox
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>

<Switch
  selected={isOn}
  onChange={(e) => setIsOn(e.target.selected)}
/>
```

### Chips

- `ChipSet` - chip container
- `AssistChip` - assist chip
- `FilterChip` - filter chip
- `InputChip` - input chip
- `SuggestionChip` - suggestion chip

```tsx
<ChipSet>
  <FilterChip label="Filter 1" selected />
  <FilterChip label="Filter 2" />
  <FilterChip label="Filter 3" />
</ChipSet>
```

### Lists

- `List` - list container
- `ListItem` - list item

```tsx
<List>
  <ListItem headline="Title" supportingText="Description" />
  <ListItem headline="Title 2" supportingText="Description 2" />
</List>
```

### Menu

- `Menu` - menu
- `MenuItem` - menu item
- `SubMenu` - submenu

```tsx
<Menu open={isOpen} anchor="button-id">
  <MenuItem headline="Item 1" onClick={handleClick1} />
  <MenuItem headline="Item 2" onClick={handleClick2} />
</Menu>
```

### Dialog

- `Dialog` - dialog window

```tsx
<Dialog open={isOpen} onClosed={() => setIsOpen(false)}>
  <div slot="headline">Title</div>
  <div slot="content">Dialog content</div>
  <div slot="actions">
    <TextButton onClick={() => setIsOpen(false)}>Cancel</TextButton>
    <FilledButton onClick={handleConfirm}>OK</FilledButton>
  </div>
</Dialog>
```

### Progress

- `LinearProgress` - linear progress bar
- `CircularProgress` - circular progress indicator

```tsx
<LinearProgress value={50} max={100} />
<CircularProgress indeterminate />
```

### Slider

- `Slider` - slider control

```tsx
<Slider
  min={0}
  max={100}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Tabs

- `Tabs` - tabs container
- `PrimaryTab` - primary tab
- `SecondaryTab` - secondary tab

```tsx
<Tabs
  activeTabIndex={activeTab}
  onChange={(e) => setActiveTab(e.target.activeTabIndex)}
>
  <PrimaryTab>Tab 1</PrimaryTab>
  <PrimaryTab>Tab 2</PrimaryTab>
  <PrimaryTab>Tab 3</PrimaryTab>
</Tabs>
```

### Navigation

- `NavigationBar` - navigation bar
- `NavigationTab` - navigation tab

```tsx
<NavigationBar activeIndex={0}>
  <NavigationTab label="Home">
    <Icon name="home" />
  </NavigationTab>
  <NavigationTab label="Search">
    <Icon name="search" />
  </NavigationTab>
</NavigationBar>
```

### Icon

- `Icon` - Material Symbols icon with support for rounded, outlined, and sharp variants

**Props:**

- `name` (required) - icon name from Material Symbols
- `variant` - icon style: `"rounded"` (default), `"outlined"`, or `"sharp"`
- `filled` - boolean to use filled variant

```tsx
// Rounded icons (default)
<Icon name="favorite" />
<Icon name="favorite" filled />

// Outlined icons
<Icon name="settings" variant="outlined" />
<Icon name="settings" variant="outlined" filled />

// Sharp icons
<Icon name="home" variant="sharp" />
<Icon name="home" variant="sharp" filled />
```

### Utilities

- `Divider` - divider line
- `Elevation` - elevation/shadow effect
- `Ripple` - ripple effect
- `FocusRing` - focus ring indicator

```tsx
<Divider />
<Elevation />
<Ripple />
```

## TypeScript Support

All components are fully typed. You can import types:

```tsx
import { ButtonProps, TextFieldProps } from "@material-react/web";
```

## Creating Custom Components

You can use the `createComponent` utility to create wrappers for other web components:

```tsx
import { createComponent, BaseProps } from "@material-react/web";

interface MyComponentProps extends BaseProps {
  myProp?: string;
}

export const MyComponent = createComponent<HTMLElement, MyComponentProps>(
  "my-web-component"
);
```

## Features

- ✅ Full TypeScript support
- ✅ React hooks compatible
- ✅ Ref forwarding
- ✅ Automatic event handling
- ✅ Proper props and attributes handling
- ✅ Material Design 3 specification

## Notes

### Slots

Some components use slots for content placement. In React, use the `slot` attribute:

```tsx
<Dialog>
  <div slot="headline">Title</div>
  <div slot="content">Content</div>
</Dialog>
```

### Events

Events are automatically converted from web components to React props:

```tsx
// Web component: element.addEventListener('input', handler)
// React: <Component onInput={handler} />
```

### Icons

The Icon component uses **Variable Fonts** from the `@material-symbols/font-400` npm package, loaded via jsDelivr CDN. The library supports three variants: **Rounded**, **Outlined**, and **Sharp**.

**Key Features:**

- ✅ True variable fonts with `font-variation-settings` support
- ✅ Dynamic switching between filled/unfilled states
- ✅ Fast CDN delivery from jsDelivr
- ✅ All Material Symbols icons available (2000+)

The fonts are automatically loaded from jsDelivr CDN:

```css
/* Material Symbols - Rounded (Variable Font) */
@font-face {
  font-family: "Material Symbols Rounded";
  font-style: normal;
  font-weight: 100 700;
  src: url(https://cdn.jsdelivr.net/npm/@material-symbols/font-400/material-symbols-rounded.woff2)
    format("woff2");
}
```

**Font Variation Axes:**

- `FILL` 0 = unfilled (outline) icons ⌂
- `FILL` 1 = filled icons 🏠
- `wght` = weight (100-700)
- `GRAD` = grade (-50 to 200)
- `opsz` = optical size (20-48)

Browse available icons at [Google Fonts Icons](https://fonts.google.com/icons).

## Development

```bash
# Type checking
npm run typecheck
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Related Projects

- [Material Web Components](https://github.com/material-components/material-web) - Official Material Design 3 web components
- [Material Design 3](https://m3.material.io/) - Material Design documentation
