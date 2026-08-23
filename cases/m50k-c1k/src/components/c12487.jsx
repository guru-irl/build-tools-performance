import React from 'react';
const LABEL_12487 = 'component_12487';
export function Component12487({ value = 12487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12487, 'data-value': derived.doubled }, children);
}
export default Component12487;
