import React from 'react';
const LABEL_33852 = 'component_33852';
export function Component33852({ value = 33852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33852, 'data-value': derived.doubled }, children);
}
export default Component33852;
