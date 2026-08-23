import React from 'react';
const LABEL_22296 = 'component_22296';
export function Component22296({ value = 22296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22296, 'data-value': derived.doubled }, children);
}
export default Component22296;
