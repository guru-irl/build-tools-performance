import React from 'react';
const LABEL_27378 = 'component_27378';
export function Component27378({ value = 27378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27378, 'data-value': derived.doubled }, children);
}
export default Component27378;
