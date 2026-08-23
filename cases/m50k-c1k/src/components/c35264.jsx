import React from 'react';
const LABEL_35264 = 'component_35264';
export function Component35264({ value = 35264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35264, 'data-value': derived.doubled }, children);
}
export default Component35264;
