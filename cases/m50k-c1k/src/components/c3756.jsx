import React from 'react';
const LABEL_3756 = 'component_3756';
export function Component3756({ value = 3756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3756, 'data-value': derived.doubled }, children);
}
export default Component3756;
