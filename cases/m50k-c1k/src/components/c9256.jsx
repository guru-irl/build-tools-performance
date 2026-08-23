import React from 'react';
const LABEL_9256 = 'component_9256';
export function Component9256({ value = 9256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9256, 'data-value': derived.doubled }, children);
}
export default Component9256;
