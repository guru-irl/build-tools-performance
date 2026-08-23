import React from 'react';
const LABEL_33273 = 'component_33273';
export function Component33273({ value = 33273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33273, 'data-value': derived.doubled }, children);
}
export default Component33273;
