import React from 'react';
const LABEL_21799 = 'component_21799';
export function Component21799({ value = 21799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21799, 'data-value': derived.doubled }, children);
}
export default Component21799;
