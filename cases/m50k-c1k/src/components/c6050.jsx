import React from 'react';
const LABEL_6050 = 'component_6050';
export function Component6050({ value = 6050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6050, 'data-value': derived.doubled }, children);
}
export default Component6050;
