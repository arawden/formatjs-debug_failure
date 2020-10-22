import React from 'react';

import { FormattedMessage } from 'react-intl';

const Component = (): React.ReactElement => {
  return (
    <FormattedMessage description="A test message" defaultMessage="Test message" />
  )
}

export default Component;