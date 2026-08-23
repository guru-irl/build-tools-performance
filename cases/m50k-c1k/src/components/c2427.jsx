import React from 'react';
const LABEL_2427 = 'component_2427';
export function Component2427({ value = 2427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2427, 'data-value': derived.doubled }, children);
}
export default Component2427;
