import React from 'react';
const LABEL_23095 = 'component_23095';
export function Component23095({ value = 23095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23095, 'data-value': derived.doubled }, children);
}
export default Component23095;
