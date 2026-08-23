import React from 'react';
const LABEL_14756 = 'component_14756';
export function Component14756({ value = 14756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14756, 'data-value': derived.doubled }, children);
}
export default Component14756;
