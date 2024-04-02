import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
    given('user hasn\'t specified a number', () => {

    });
    let AppComponent;
    when('the main page is open', () => {
      AppComponent = render(<App />);
    });

    then(/^(\d+) events are shown by default$/, async (arg0) => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test('User can change the number of events displayed.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    given('the main page is open', () => {
      AppComponent = render(<App />);
    });

    let NumberOfEventsDOM;
    when('the user specifies a number of events', async () => {
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
      const numOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
      await user.type(numOfEventsInput,'{backspace}{backspace}10');
    });

    then('the app displays as many events as the user has specified', () => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      const numOfDispEvents = within(EventListDOM).queryAllByRole('listitem');
      expect(numOfDispEvents.length).toEqual(10);
    });;
}); 
});