import React from 'react';
const LABEL_6893 = 'component_6893';
export function Component6893({ value = 6893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6893, 'data-value': derived.doubled }, children);
}
export default Component6893;
