import React from 'react';
const LABEL_33915 = 'component_33915';
export function Component33915({ value = 33915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33915, 'data-value': derived.doubled }, children);
}
export default Component33915;
