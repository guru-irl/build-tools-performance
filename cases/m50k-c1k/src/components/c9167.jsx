import React from 'react';
const LABEL_9167 = 'component_9167';
export function Component9167({ value = 9167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9167, 'data-value': derived.doubled }, children);
}
export default Component9167;
