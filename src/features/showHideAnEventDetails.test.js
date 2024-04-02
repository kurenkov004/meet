import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    given('the event list is displayed', () => {
      AppComponent = render(<App />);
    });

    when('no event is selected', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    then('event details are hidden by default.', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see details.', ({ given, when, then }) => {
    let AppComponent;
    given('the event list is displayed', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    let EventDOM;
    when('a user selects an event component', async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      EventDOM = AppDOM.querySelector('.event');
      const showDetails = EventDOM.querySelector('.details-button');
      await user.click(showDetails);
    });

    then('event component is expanded to show details', () => {
      const eventDetails = EventDOM.querySelector('.details');
      expect(eventDetails).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details.', ({ given, when, then }) => {
    let AppComponent;
    let EventComponent;
    let allEvents;
    given('an event component is selected and expanded to show details', async () => {
      AppComponent = render(<App />);
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const user = userEvent.setup();
      await user.click(EventComponent.queryByText('show details'));
      expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
    });

    when(/^a user clicks on "(.*)" button$/, async (arg0) => {
      const user = userEvent.setup();
      const hideDetails = EventComponent.queryByText('hide details');
      await user.click(hideDetails);
    });

    then('the event component collapses and event details are hidden', () => {
     expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    });
  });
});