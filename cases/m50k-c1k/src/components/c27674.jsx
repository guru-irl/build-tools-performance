import React from 'react';
const LABEL_27674 = 'component_27674';
export function Component27674({ value = 27674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27674, 'data-value': derived.doubled }, children);
}
export default Component27674;
