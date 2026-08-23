import React from 'react';
const LABEL_27603 = 'component_27603';
export function Component27603({ value = 27603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27603, 'data-value': derived.doubled }, children);
}
export default Component27603;
