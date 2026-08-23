import React from 'react';
const LABEL_44264 = 'component_44264';
export function Component44264({ value = 44264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44264, 'data-value': derived.doubled }, children);
}
export default Component44264;
