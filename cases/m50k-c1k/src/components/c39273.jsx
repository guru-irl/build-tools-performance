import React from 'react';
const LABEL_39273 = 'component_39273';
export function Component39273({ value = 39273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39273, 'data-value': derived.doubled }, children);
}
export default Component39273;
