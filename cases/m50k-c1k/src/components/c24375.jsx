import React from 'react';
const LABEL_24375 = 'component_24375';
export function Component24375({ value = 24375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24375, 'data-value': derived.doubled }, children);
}
export default Component24375;
