import React from 'react';
const LABEL_27758 = 'component_27758';
export function Component27758({ value = 27758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27758, 'data-value': derived.doubled }, children);
}
export default Component27758;
