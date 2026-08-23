import React from 'react';
const LABEL_21251 = 'component_21251';
export function Component21251({ value = 21251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21251, 'data-value': derived.doubled }, children);
}
export default Component21251;
