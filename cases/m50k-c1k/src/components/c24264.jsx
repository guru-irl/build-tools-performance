import React from 'react';
const LABEL_24264 = 'component_24264';
export function Component24264({ value = 24264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24264, 'data-value': derived.doubled }, children);
}
export default Component24264;
