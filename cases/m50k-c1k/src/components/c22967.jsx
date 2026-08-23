import React from 'react';
const LABEL_22967 = 'component_22967';
export function Component22967({ value = 22967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22967, 'data-value': derived.doubled }, children);
}
export default Component22967;
