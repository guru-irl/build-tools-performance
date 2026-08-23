import React from 'react';
const LABEL_18810 = 'component_18810';
export function Component18810({ value = 18810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18810, 'data-value': derived.doubled }, children);
}
export default Component18810;
