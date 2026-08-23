import React from 'react';
const LABEL_27198 = 'component_27198';
export function Component27198({ value = 27198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27198, 'data-value': derived.doubled }, children);
}
export default Component27198;
