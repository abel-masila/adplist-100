import { render } from '@testing-library/react';

import ProtectedRoute from './protected-route';

describe('ProtectedRoute', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProtectedRoute />);
    expect(baseElement).toBeTruthy();
  });
});
