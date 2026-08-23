import React from 'react';
const LABEL_9478 = 'component_9478';
export function Component9478({ value = 9478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9478, 'data-value': derived.doubled }, children);
}
export default Component9478;
