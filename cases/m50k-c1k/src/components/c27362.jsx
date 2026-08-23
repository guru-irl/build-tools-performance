import React from 'react';
const LABEL_27362 = 'component_27362';
export function Component27362({ value = 27362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27362, 'data-value': derived.doubled }, children);
}
export default Component27362;
