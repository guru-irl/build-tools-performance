import React from 'react';
const LABEL_27127 = 'component_27127';
export function Component27127({ value = 27127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27127, 'data-value': derived.doubled }, children);
}
export default Component27127;
