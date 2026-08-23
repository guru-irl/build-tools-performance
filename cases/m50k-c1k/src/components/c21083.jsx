import React from 'react';
const LABEL_21083 = 'component_21083';
export function Component21083({ value = 21083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21083, 'data-value': derived.doubled }, children);
}
export default Component21083;
