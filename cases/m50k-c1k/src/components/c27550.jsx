import React from 'react';
const LABEL_27550 = 'component_27550';
export function Component27550({ value = 27550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27550, 'data-value': derived.doubled }, children);
}
export default Component27550;
