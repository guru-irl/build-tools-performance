import React from 'react';
const LABEL_11915 = 'component_11915';
export function Component11915({ value = 11915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11915, 'data-value': derived.doubled }, children);
}
export default Component11915;
