import React from 'react';
const LABEL_6296 = 'component_6296';
export function Component6296({ value = 6296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6296, 'data-value': derived.doubled }, children);
}
export default Component6296;
