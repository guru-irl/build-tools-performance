import React from 'react';
const LABEL_27830 = 'component_27830';
export function Component27830({ value = 27830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27830, 'data-value': derived.doubled }, children);
}
export default Component27830;
