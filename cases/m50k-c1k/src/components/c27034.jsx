import React from 'react';
const LABEL_27034 = 'component_27034';
export function Component27034({ value = 27034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27034, 'data-value': derived.doubled }, children);
}
export default Component27034;
