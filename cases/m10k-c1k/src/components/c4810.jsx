import React from 'react';
const LABEL_4810 = 'component_4810';
export function Component4810({ value = 4810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4810, 'data-value': derived.doubled }, children);
}
export default Component4810;
