import React from 'react';
const LABEL_33809 = 'component_33809';
export function Component33809({ value = 33809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33809, 'data-value': derived.doubled }, children);
}
export default Component33809;
