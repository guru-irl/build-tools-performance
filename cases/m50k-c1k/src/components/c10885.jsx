import React from 'react';
const LABEL_10885 = 'component_10885';
export function Component10885({ value = 10885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10885, 'data-value': derived.doubled }, children);
}
export default Component10885;
