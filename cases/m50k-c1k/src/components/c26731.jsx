import React from 'react';
const LABEL_26731 = 'component_26731';
export function Component26731({ value = 26731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26731, 'data-value': derived.doubled }, children);
}
export default Component26731;
