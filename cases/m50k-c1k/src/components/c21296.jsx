import React from 'react';
const LABEL_21296 = 'component_21296';
export function Component21296({ value = 21296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21296, 'data-value': derived.doubled }, children);
}
export default Component21296;
