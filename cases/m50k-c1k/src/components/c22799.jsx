import React from 'react';
const LABEL_22799 = 'component_22799';
export function Component22799({ value = 22799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22799, 'data-value': derived.doubled }, children);
}
export default Component22799;
