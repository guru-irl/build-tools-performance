import React from 'react';
const LABEL_20264 = 'component_20264';
export function Component20264({ value = 20264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20264, 'data-value': derived.doubled }, children);
}
export default Component20264;
