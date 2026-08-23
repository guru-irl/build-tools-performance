import React from 'react';
const LABEL_27264 = 'component_27264';
export function Component27264({ value = 27264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27264, 'data-value': derived.doubled }, children);
}
export default Component27264;
