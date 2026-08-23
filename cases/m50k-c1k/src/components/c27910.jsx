import React from 'react';
const LABEL_27910 = 'component_27910';
export function Component27910({ value = 27910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27910, 'data-value': derived.doubled }, children);
}
export default Component27910;
