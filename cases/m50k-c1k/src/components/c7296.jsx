import React from 'react';
const LABEL_7296 = 'component_7296';
export function Component7296({ value = 7296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7296, 'data-value': derived.doubled }, children);
}
export default Component7296;
