import React from 'react';
const LABEL_6134 = 'component_6134';
export function Component6134({ value = 6134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6134, 'data-value': derived.doubled }, children);
}
export default Component6134;
