import React from 'react';
const LABEL_27761 = 'component_27761';
export function Component27761({ value = 27761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27761, 'data-value': derived.doubled }, children);
}
export default Component27761;
