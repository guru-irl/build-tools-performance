import React from 'react';
const LABEL_9577 = 'component_9577';
export function Component9577({ value = 9577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9577, 'data-value': derived.doubled }, children);
}
export default Component9577;
