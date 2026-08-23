import React from 'react';
const LABEL_9484 = 'component_9484';
export function Component9484({ value = 9484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9484, 'data-value': derived.doubled }, children);
}
export default Component9484;
