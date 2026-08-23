import React from 'react';
const LABEL_12733 = 'component_12733';
export function Component12733({ value = 12733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12733, 'data-value': derived.doubled }, children);
}
export default Component12733;
