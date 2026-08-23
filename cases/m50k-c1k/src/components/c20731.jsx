import React from 'react';
const LABEL_20731 = 'component_20731';
export function Component20731({ value = 20731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20731, 'data-value': derived.doubled }, children);
}
export default Component20731;
