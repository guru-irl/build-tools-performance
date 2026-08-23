import React from 'react';
const LABEL_27021 = 'component_27021';
export function Component27021({ value = 27021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27021, 'data-value': derived.doubled }, children);
}
export default Component27021;
