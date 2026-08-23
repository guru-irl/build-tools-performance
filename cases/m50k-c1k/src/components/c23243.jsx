import React from 'react';
const LABEL_23243 = 'component_23243';
export function Component23243({ value = 23243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23243, 'data-value': derived.doubled }, children);
}
export default Component23243;
