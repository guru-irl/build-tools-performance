import React from 'react';
const LABEL_27823 = 'component_27823';
export function Component27823({ value = 27823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27823, 'data-value': derived.doubled }, children);
}
export default Component27823;
