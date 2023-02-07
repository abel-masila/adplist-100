import { render, screen } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const saveHandler = jest.fn();
    const { baseElement } = render(
      <Button onClick={saveHandler} title="Save" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should renders link button', () => {
    const saveHandler = jest.fn();
    render(<Button onClick={saveHandler} title="Save" isLink />);
    const element = screen.getByText('Save');
    const styles = getComputedStyle(element);
    expect(styles.textDecoration).toBe('underline');
  });
});
