import React from 'react';
const LABEL_32483 = 'component_32483';
export function Component32483({ value = 32483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32483, 'data-value': derived.doubled }, children);
}
export default Component32483;
