import React from 'react';
const LABEL_33133 = 'component_33133';
export function Component33133({ value = 33133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33133, 'data-value': derived.doubled }, children);
}
export default Component33133;
