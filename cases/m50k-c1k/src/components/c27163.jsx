import React from 'react';
const LABEL_27163 = 'component_27163';
export function Component27163({ value = 27163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27163, 'data-value': derived.doubled }, children);
}
export default Component27163;
