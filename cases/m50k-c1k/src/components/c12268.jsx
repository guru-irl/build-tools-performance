import React from 'react';
const LABEL_12268 = 'component_12268';
export function Component12268({ value = 12268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12268, 'data-value': derived.doubled }, children);
}
export default Component12268;
