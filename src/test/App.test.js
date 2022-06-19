/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../testSetup';
import App from '../App';

describe('first-test', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
