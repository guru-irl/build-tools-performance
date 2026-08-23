import React from 'react';
const LABEL_21291 = 'component_21291';
export function Component21291({ value = 21291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21291, 'data-value': derived.doubled }, children);
}
export default Component21291;
