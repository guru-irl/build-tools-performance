import React from 'react';
const LABEL_27633 = 'component_27633';
export function Component27633({ value = 27633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27633, 'data-value': derived.doubled }, children);
}
export default Component27633;
