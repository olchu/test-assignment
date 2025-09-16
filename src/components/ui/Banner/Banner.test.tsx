import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Banner } from './index';

describe('Banner', () => {
  it('removes itself from the DOM after clicking the close button', () => {
    render(<Banner />);

    const el = screen.getByTestId('banner-element');
    expect(el).toBeInTheDocument();

    const closeBtn = screen.getByTestId('banner-btn-close');
    fireEvent.click(closeBtn);

    fireEvent.animationEnd(el);
    fireEvent.transitionEnd(el);

    expect(screen.queryByTestId('banner-element')).not.toBeInTheDocument();
  });
});
