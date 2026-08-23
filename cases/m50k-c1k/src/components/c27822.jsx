import React from 'react';
const LABEL_27822 = 'component_27822';
export function Component27822({ value = 27822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27822, 'data-value': derived.doubled }, children);
}
export default Component27822;
