import React from 'react';
const LABEL_27677 = 'component_27677';
export function Component27677({ value = 27677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27677, 'data-value': derived.doubled }, children);
}
export default Component27677;
