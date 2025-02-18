import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import App from '../App';
import { UIInput } from '../ui-kit';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/UIInput">
        <UIInput />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
