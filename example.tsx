/**
 * Example usage of Material React library
 * This file demonstrates the main features of the components
 */

import { useState } from 'react';
import {
  FilledButton,
  OutlinedButton,
  TextButton,
  OutlinedTextField,
  FilledSelect,
  SelectOption,
  Checkbox,
  Switch,
  Radio,
  ChipSet,
  FilterChip,
  Dialog,
  LinearProgress,
  Slider,
  Icon,
  Divider,
  NavigationBar,
  NavigationTab,
  List,
  ListItem,
} from './index';

export function MaterialExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [progress, setProgress] = useState(0);

  const handleSubmit = () => {
    console.log('Form submitted:', { name, email, isChecked, isSwitchOn });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Material React Components Demo</h1>

      {/* Buttons */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <FilledButton onClick={() => console.log('Filled')}>
            Filled Button
          </FilledButton>
          <OutlinedButton onClick={() => console.log('Outlined')}>
            Outlined Button
          </OutlinedButton>
          <TextButton onClick={() => console.log('Text')}>
            Text Button
          </TextButton>
          <FilledButton disabled>
            Disabled Button
          </FilledButton>
        </div>
      </section>

      <Divider />

      {/* Icons */}
      <section style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h2>Icons</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Rounded (default)</h3>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Icon name="home" />
              <Icon name="favorite" />
              <Icon name="settings" />
              <Icon name="home" filled />
              <Icon name="favorite" filled />
              <Icon name="settings" filled />
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Outlined</h3>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Icon name="home" variant="outlined" />
              <Icon name="favorite" variant="outlined" />
              <Icon name="settings" variant="outlined" />
              <Icon name="home" variant="outlined" filled />
              <Icon name="favorite" variant="outlined" filled />
              <Icon name="settings" variant="outlined" filled />
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Sharp</h3>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Icon name="home" variant="sharp" />
              <Icon name="favorite" variant="sharp" />
              <Icon name="settings" variant="sharp" />
              <Icon name="home" variant="sharp" filled />
              <Icon name="favorite" variant="sharp" filled />
              <Icon name="settings" variant="sharp" filled />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Text Fields */}
      <section style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h2>Text Fields</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <OutlinedTextField
            label="Имя"
            value={name}
            onInput={(e: any) => setName(e.target.value)}
            supportingText="Введите ваше имя"
          />
          <OutlinedTextField
            label="Email"
            type="email"
            value={email}
            onInput={(e: any) => setEmail(e.target.value)}
            supportingText="Введите ваш email"
          />
        </div>
      </section>

      <Divider />

      {/* Select */}
      <section style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h2>Select</h2>
        <FilledSelect label="Выберите город">
          <SelectOption value="msk" headline="Москва" />
          <SelectOption value="spb" headline="Санкт-Петербург" />
          <SelectOption value="nsk" headline="Новосибирск" />
        </FilledSelect>
      </section>

      <Divider />

      {/* Checkboxes and Switches */}
      <section style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h2>Checkboxes & Switches</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Checkbox
              checked={isChecked}
              onChange={(e: any) => setIsChecked(e.target.checked)}
            />
            <span>Согласен с условиями</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Switch
              selected={isSwitchOn}
              onChange={(e: any) => setIsSwitchOn(e.target.selected)}
            />
            <span>Включить уведомления</span>
          </label>

          <div>
            <p>Выберите опцию:</p>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Radio
                name="options"
                value="option1"
                checked={selectedRadio === 'option1'}
                onChange={() => setSelectedRadio('option1')}
              />
              <span>Опция 1</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Radio
                name="options"
                value="option2"
                checked={selectedRadio === 'option2'}
                onChange={() => setSelectedRadio('option2')}
              />
              <span>Опция 2</span>
            </label>
          </div>
        </div>
      </section>

      <Divider />

      {/* Chips */}
      <section style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h2>Chips</h2>
        <ChipSet>
          <FilterChip label="React" selected />
          <FilterChip label="TypeScript" />
          <FilterChip label="Material Design" selected />
          <FilterChip label="Web Components" />
        </ChipSet>
      </section>

      <Divider />

      {/* Progress & Slider */}
      <section style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h2>Progress & Slider</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <p>Linear Progress:</p>
            <LinearProgress value={progress} max={100} />
            <FilledButton onClick={() => setProgress(Math.min(100, progress + 10))}>
              +10%
            </FilledButton>
          </div>

          <div>
            <p>Slider: {sliderValue}</p>
            <Slider
              min={0}
              max={100}
              value={sliderValue}
              onInput={(e: any) => setSliderValue(e.target.value)}
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* List */}
      <section style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h2>List</h2>
        <List>
          <ListItem
            headline="Элемент 1"
            supportingText="Описание элемента 1"
          />
          <ListItem
            headline="Элемент 2"
            supportingText="Описание элемента 2"
          />
          <ListItem
            headline="Элемент 3"
            supportingText="Описание элемента 3"
          />
        </List>
      </section>

      <Divider />

      {/* Dialog */}
      <section style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h2>Dialog</h2>
        <FilledButton onClick={() => setDialogOpen(true)}>
          Открыть диалог
        </FilledButton>

        <Dialog open={dialogOpen} onClosed={() => setDialogOpen(false)}>
          <div slot="headline">Подтверждение</div>
          <div slot="content">
            Вы уверены, что хотите продолжить?
          </div>
          <div slot="actions">
            <TextButton onClick={() => setDialogOpen(false)}>
              Отмена
            </TextButton>
            <FilledButton onClick={() => {
              handleSubmit();
              setDialogOpen(false);
            }}>
              OK
            </FilledButton>
          </div>
        </Dialog>
      </section>

      <Divider />

      {/* Navigation Bar */}
      <section style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h2>Navigation Bar</h2>
        <NavigationBar>
          <NavigationTab label="Главная" active>
            <Icon name="home" />
          </NavigationTab>
          <NavigationTab label="Поиск">
            <Icon name="search" />
          </NavigationTab>
          <NavigationTab label="Профиль">
            <Icon name="person" />
          </NavigationTab>
        </NavigationBar>
      </section>

      {/* Submit */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <FilledButton onClick={handleSubmit}>
          Отправить форму
        </FilledButton>
      </div>
    </div>
  );
}

export default MaterialExample;
