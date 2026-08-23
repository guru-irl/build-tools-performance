import React from 'react';
const LABEL_5243 = 'component_5243';
export function Component5243({ value = 5243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5243, 'data-value': derived.doubled }, children);
}
export default Component5243;
