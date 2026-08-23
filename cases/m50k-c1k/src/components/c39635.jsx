import React from 'react';
const LABEL_39635 = 'component_39635';
export function Component39635({ value = 39635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39635, 'data-value': derived.doubled }, children);
}
export default Component39635;
