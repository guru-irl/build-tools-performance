import React from 'react';
const LABEL_15837 = 'component_15837';
export function Component15837({ value = 15837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15837, 'data-value': derived.doubled }, children);
}
export default Component15837;
