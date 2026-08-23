import React from 'react';
const LABEL_23314 = 'component_23314';
export function Component23314({ value = 23314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23314, 'data-value': derived.doubled }, children);
}
export default Component23314;
