import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'

test('Welcome testing', () => {
    render(<App />);
    const welcomeMessage = screen.getByText(/Benvenuto alla tua Library/i);
    const subMessage = screen.getByText(/Scopri una vasta selezione di libri!/i);
    expect(welcomeMessage).toBeInTheDocument();
    expect(subMessage).toBeInTheDocument();

});

test('Cards testing', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    expect(allTheBookCards).toHaveLength(150)
})

describe('SingleBook testing', () => {
    it('cambio colore del bordo della card al click', () => {
        render(<App />)
        const allTheBookCards = screen.getAllByTestId('book-card')
        const firstBookCard = allTheBookCards[0]
        fireEvent.click(firstBookCard)
        expect(firstBookCard).toHaveStyle('border: 3px solid black')
    })

    it('cambio colore del bordo della card al click su una card differente', () => {
        render(<App />)
        const allTheBookCards = screen.getAllByTestId('book-card')
        const firstBookCard = allTheBookCards[0]
        fireEvent.click(firstBookCard)
        expect(firstBookCard).toHaveStyle('border: 3px solid black')

        const secondBookCard = allTheBookCards[1]
        fireEvent.click(secondBookCard)
        expect(firstBookCard).not.toHaveStyle('border: 3px solid black')
    })
});

test('CommentArea testing', () => {
    render(<App />);
    const commentInputField = screen.getByPlaceholderText(/Aggiungi un commento qui/i);
    const submitButton = screen.getByTestId('add-comment-btn');
    expect(commentInputField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test('SingleComment testing', () => {
    const singleCommentInstances = screen.queryAllByTestId('single-comment');
    expect(singleCommentInstances).toHaveLength(0);
});

