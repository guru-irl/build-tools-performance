import React from 'react';
const LABEL_23852 = 'component_23852';
export function Component23852({ value = 23852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23852, 'data-value': derived.doubled }, children);
}
export default Component23852;
