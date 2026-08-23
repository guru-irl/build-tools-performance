import React from 'react';
const LABEL_23830 = 'component_23830';
export function Component23830({ value = 23830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23830, 'data-value': derived.doubled }, children);
}
export default Component23830;
