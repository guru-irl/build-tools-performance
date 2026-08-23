import React from 'react';
const LABEL_9095 = 'component_9095';
export function Component9095({ value = 9095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9095, 'data-value': derived.doubled }, children);
}
export default Component9095;
