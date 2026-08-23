import React from 'react';
const LABEL_32830 = 'component_32830';
export function Component32830({ value = 32830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32830, 'data-value': derived.doubled }, children);
}
export default Component32830;
