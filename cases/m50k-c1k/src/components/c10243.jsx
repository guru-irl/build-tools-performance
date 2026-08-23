import React from 'react';
const LABEL_10243 = 'component_10243';
export function Component10243({ value = 10243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10243, 'data-value': derived.doubled }, children);
}
export default Component10243;
