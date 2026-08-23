import React from 'react';
const LABEL_27552 = 'component_27552';
export function Component27552({ value = 27552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27552, 'data-value': derived.doubled }, children);
}
export default Component27552;
