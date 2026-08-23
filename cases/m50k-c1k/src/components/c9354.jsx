import React from 'react';
const LABEL_9354 = 'component_9354';
export function Component9354({ value = 9354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9354, 'data-value': derived.doubled }, children);
}
export default Component9354;
