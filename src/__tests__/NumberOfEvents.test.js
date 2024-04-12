import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
    <NumberOfEvents
      setCurrentNOE={() => {}}
      setErrorAlert={() => { }} />);
  });

  test('contains element with role of textbox', () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberTextBox).toBeInTheDocument();
  });

  test('input textbox has a default value of 32', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32')
  });

  test('value of input textbox changes accordingle when a user types into it', async () => {
    const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
    const user = userEvent.setup();
    await user.type(numberOfEvents, '{backspace}{backspace}10');
    expect(numberOfEvents).toHaveValue('10');
  })
});