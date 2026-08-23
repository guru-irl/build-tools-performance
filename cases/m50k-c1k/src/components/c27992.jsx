import React from 'react';
const LABEL_27992 = 'component_27992';
export function Component27992({ value = 27992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27992, 'data-value': derived.doubled }, children);
}
export default Component27992;
