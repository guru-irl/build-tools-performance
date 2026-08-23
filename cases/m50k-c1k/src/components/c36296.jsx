import React from 'react';
const LABEL_36296 = 'component_36296';
export function Component36296({ value = 36296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36296, 'data-value': derived.doubled }, children);
}
export default Component36296;
