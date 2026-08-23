import React from 'react';
const LABEL_21574 = 'component_21574';
export function Component21574({ value = 21574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21574, 'data-value': derived.doubled }, children);
}
export default Component21574;
