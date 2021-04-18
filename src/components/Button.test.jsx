import {Button} from '../stories/Button.js';
import {render, screen} from '@testing-library/react';
import {Primary} from '../stories/Button.stories';

test('should render', () => {
  render(<Button label='Click Me!' />);
  // expect(screen.getByRole('button')).toHaveTextContent('click');
  expect(screen.getByRole('button')).toHaveTextContent(/click/i); // regex anything contains the word 'click'
});

test('should render1', () => {
  render(<Primary {...Primary.args} />);
  /* this is because
    Primary.args = {
      primary: true,
      label: 'Button',  <--------------
    };
   */
  expect(screen.getByRole('button')).toHaveTextContent(/button/i);
});
