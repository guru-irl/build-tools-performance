import React from 'react';
const LABEL_37264 = 'component_37264';
export function Component37264({ value = 37264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37264, 'data-value': derived.doubled }, children);
}
export default Component37264;
