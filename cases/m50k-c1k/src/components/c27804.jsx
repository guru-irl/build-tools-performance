import React from 'react';
const LABEL_27804 = 'component_27804';
export function Component27804({ value = 27804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27804, 'data-value': derived.doubled }, children);
}
export default Component27804;
