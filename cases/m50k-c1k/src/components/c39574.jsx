import React from 'react';
const LABEL_39574 = 'component_39574';
export function Component39574({ value = 39574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39574, 'data-value': derived.doubled }, children);
}
export default Component39574;
