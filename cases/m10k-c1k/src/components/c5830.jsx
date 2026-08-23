import React from 'react';
const LABEL_5830 = 'component_5830';
export function Component5830({ value = 5830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5830, 'data-value': derived.doubled }, children);
}
export default Component5830;
