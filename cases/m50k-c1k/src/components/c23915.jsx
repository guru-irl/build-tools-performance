import React from 'react';
const LABEL_23915 = 'component_23915';
export function Component23915({ value = 23915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23915, 'data-value': derived.doubled }, children);
}
export default Component23915;
