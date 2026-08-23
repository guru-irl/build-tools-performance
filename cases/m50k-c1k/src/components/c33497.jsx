import React from 'react';
const LABEL_33497 = 'component_33497';
export function Component33497({ value = 33497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33497, 'data-value': derived.doubled }, children);
}
export default Component33497;
