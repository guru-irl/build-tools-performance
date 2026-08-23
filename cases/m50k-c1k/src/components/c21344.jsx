import React from 'react';
const LABEL_21344 = 'component_21344';
export function Component21344({ value = 21344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21344, 'data-value': derived.doubled }, children);
}
export default Component21344;
