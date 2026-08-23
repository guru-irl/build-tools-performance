import React from 'react';
const LABEL_21733 = 'component_21733';
export function Component21733({ value = 21733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21733, 'data-value': derived.doubled }, children);
}
export default Component21733;
