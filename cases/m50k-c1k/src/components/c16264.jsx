import React from 'react';
const LABEL_16264 = 'component_16264';
export function Component16264({ value = 16264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16264, 'data-value': derived.doubled }, children);
}
export default Component16264;
