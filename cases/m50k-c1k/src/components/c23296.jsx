import React from 'react';
const LABEL_23296 = 'component_23296';
export function Component23296({ value = 23296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23296, 'data-value': derived.doubled }, children);
}
export default Component23296;
