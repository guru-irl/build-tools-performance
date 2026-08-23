import React from 'react';
const LABEL_11296 = 'component_11296';
export function Component11296({ value = 11296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11296, 'data-value': derived.doubled }, children);
}
export default Component11296;
