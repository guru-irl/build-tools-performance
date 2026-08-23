import React from 'react';
const LABEL_9012 = 'component_9012';
export function Component9012({ value = 9012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9012, 'data-value': derived.doubled }, children);
}
export default Component9012;
