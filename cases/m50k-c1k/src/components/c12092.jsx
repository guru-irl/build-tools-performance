import React from 'react';
const LABEL_12092 = 'component_12092';
export function Component12092({ value = 12092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12092, 'data-value': derived.doubled }, children);
}
export default Component12092;
