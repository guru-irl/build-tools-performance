import React from 'react';
const LABEL_27504 = 'component_27504';
export function Component27504({ value = 27504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27504, 'data-value': derived.doubled }, children);
}
export default Component27504;
