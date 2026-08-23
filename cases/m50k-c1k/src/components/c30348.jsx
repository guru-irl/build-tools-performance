import React from 'react';
const LABEL_30348 = 'component_30348';
export function Component30348({ value = 30348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30348, 'data-value': derived.doubled }, children);
}
export default Component30348;
