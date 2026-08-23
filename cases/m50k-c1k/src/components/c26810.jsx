import React from 'react';
const LABEL_26810 = 'component_26810';
export function Component26810({ value = 26810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26810, 'data-value': derived.doubled }, children);
}
export default Component26810;
