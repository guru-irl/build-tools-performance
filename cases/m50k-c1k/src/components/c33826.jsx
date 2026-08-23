import React from 'react';
const LABEL_33826 = 'component_33826';
export function Component33826({ value = 33826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33826, 'data-value': derived.doubled }, children);
}
export default Component33826;
