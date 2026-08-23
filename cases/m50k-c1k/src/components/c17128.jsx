import React from 'react';
const LABEL_17128 = 'component_17128';
export function Component17128({ value = 17128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17128, 'data-value': derived.doubled }, children);
}
export default Component17128;
