import React from 'react';

import { render , cleanup, fireEvent } from '@testing-library/react';
import ResourceButtons from './ResourceButtons';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

describe('Button', () => {
  const { getByText } = render(<ResourceButtons />);
  const postButton = getByText('POSTs');
  const todoButton = getByText('TODOs');
  const themeButton = getByText('Theme');

  describe('POSTs', () => {
    it('should render in the component', () => {
      expect(postButton).toBeInTheDocument();
    });

    it('is enabled and can be clicked', () => {
      const onClickMock = jest.fn();
      fireEvent.click(postButton);
      expect(onClickMock).toHaveBeenCalled();
    })
  });

  describe('TODOs', () => {
    it('should render in the component', () => {
      expect(todoButton).toBeInTheDocument();
    });

    it('is enabled and can be clicked', () => {
      const onClickMock = jest.fn();

      fireEvent.click(todoButton);
      expect(onClickMock).toHaveBeenCalled();
    })
  });

  describe('Theme', () => {
    it('should render in the component', () => {
      expect(themeButton).toBeInTheDocument();
    });

    it('is enabled and can be clicked', () => {
      const onClickMock = jest.fn();

      fireEvent.click(themeButton);
      expect(onClickMock).toHaveBeenCalled();
    })
  });
});