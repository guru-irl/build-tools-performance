import React from 'react';
const LABEL_27409 = 'component_27409';
export function Component27409({ value = 27409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27409, 'data-value': derived.doubled }, children);
}
export default Component27409;
