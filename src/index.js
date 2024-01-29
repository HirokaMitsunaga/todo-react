import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Todo } from './Todo';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
