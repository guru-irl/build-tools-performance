import React from 'react';
const LABEL_27509 = 'component_27509';
export function Component27509({ value = 27509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27509, 'data-value': derived.doubled }, children);
}
export default Component27509;
