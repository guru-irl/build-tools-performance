import React from 'react';
const LABEL_38296 = 'component_38296';
export function Component38296({ value = 38296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38296, 'data-value': derived.doubled }, children);
}
export default Component38296;
