import { render } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const saveHandler = jest.fn();
    const { baseElement } = render(
      <Button onClick={saveHandler} title="Save" />
    );
    expect(baseElement).toBeTruthy();
  });
});
