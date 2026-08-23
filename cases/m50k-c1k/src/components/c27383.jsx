import React from 'react';
const LABEL_27383 = 'component_27383';
export function Component27383({ value = 27383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27383, 'data-value': derived.doubled }, children);
}
export default Component27383;
