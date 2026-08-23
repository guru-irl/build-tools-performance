import React from 'react';
const LABEL_6574 = 'component_6574';
export function Component6574({ value = 6574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6574, 'data-value': derived.doubled }, children);
}
export default Component6574;
