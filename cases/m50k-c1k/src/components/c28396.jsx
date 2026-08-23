import React from 'react';
const LABEL_28396 = 'component_28396';
export function Component28396({ value = 28396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28396, 'data-value': derived.doubled }, children);
}
export default Component28396;
