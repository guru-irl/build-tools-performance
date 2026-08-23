import React from 'react';
const LABEL_21095 = 'component_21095';
export function Component21095({ value = 21095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21095, 'data-value': derived.doubled }, children);
}
export default Component21095;
