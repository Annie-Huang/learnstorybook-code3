import {Button} from '../stories/Button.js';
import {render, screen} from '@testing-library/react';

test('should render', () => {
  render(<Button label='Click Me!' />);
  // expect(screen.getByRole('button')).toHaveTextContent('click');
  expect(screen.getByRole('button')).toHaveTextContent(/click/i); // regex anything contains the word 'click'
});
