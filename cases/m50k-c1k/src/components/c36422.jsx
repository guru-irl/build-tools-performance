import React from 'react';
const LABEL_36422 = 'component_36422';
export function Component36422({ value = 36422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36422, 'data-value': derived.doubled }, children);
}
export default Component36422;
