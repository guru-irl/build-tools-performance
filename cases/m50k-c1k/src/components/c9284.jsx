import React from 'react';
const LABEL_9284 = 'component_9284';
export function Component9284({ value = 9284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9284, 'data-value': derived.doubled }, children);
}
export default Component9284;
