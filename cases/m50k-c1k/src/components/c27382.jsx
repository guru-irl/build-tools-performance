import React from 'react';
const LABEL_27382 = 'component_27382';
export function Component27382({ value = 27382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27382, 'data-value': derived.doubled }, children);
}
export default Component27382;
