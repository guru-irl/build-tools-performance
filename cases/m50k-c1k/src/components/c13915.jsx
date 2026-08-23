import React from 'react';
const LABEL_13915 = 'component_13915';
export function Component13915({ value = 13915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13915, 'data-value': derived.doubled }, children);
}
export default Component13915;
