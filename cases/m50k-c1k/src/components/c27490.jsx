import React from 'react';
const LABEL_27490 = 'component_27490';
export function Component27490({ value = 27490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27490, 'data-value': derived.doubled }, children);
}
export default Component27490;
