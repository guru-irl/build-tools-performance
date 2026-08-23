import React from 'react';
const LABEL_27333 = 'component_27333';
export function Component27333({ value = 27333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27333, 'data-value': derived.doubled }, children);
}
export default Component27333;
