import React from 'react';
const LABEL_27104 = 'component_27104';
export function Component27104({ value = 27104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27104, 'data-value': derived.doubled }, children);
}
export default Component27104;
