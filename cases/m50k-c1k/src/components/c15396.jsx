import React from 'react';
const LABEL_15396 = 'component_15396';
export function Component15396({ value = 15396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15396, 'data-value': derived.doubled }, children);
}
export default Component15396;
