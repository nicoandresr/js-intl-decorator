import { IntlProvider } from 'react-intl';

export default function(story) {
  return <IntlProvider locale="en">{story()}</IntlProvider>;
}
