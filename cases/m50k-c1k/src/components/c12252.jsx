import React from 'react';
const LABEL_12252 = 'component_12252';
export function Component12252({ value = 12252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12252, 'data-value': derived.doubled }, children);
}
export default Component12252;
