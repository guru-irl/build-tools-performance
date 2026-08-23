import React from 'react';
const LABEL_9064 = 'component_9064';
export function Component9064({ value = 9064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9064, 'data-value': derived.doubled }, children);
}
export default Component9064;
