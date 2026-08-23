import React from 'react';
const LABEL_13296 = 'component_13296';
export function Component13296({ value = 13296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13296, 'data-value': derived.doubled }, children);
}
export default Component13296;
