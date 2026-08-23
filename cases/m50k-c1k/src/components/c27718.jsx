import React from 'react';
const LABEL_27718 = 'component_27718';
export function Component27718({ value = 27718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27718, 'data-value': derived.doubled }, children);
}
export default Component27718;
