import React from 'react';
const LABEL_27031 = 'component_27031';
export function Component27031({ value = 27031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27031, 'data-value': derived.doubled }, children);
}
export default Component27031;
