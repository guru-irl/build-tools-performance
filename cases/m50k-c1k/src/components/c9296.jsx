import React from 'react';
const LABEL_9296 = 'component_9296';
export function Component9296({ value = 9296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9296, 'data-value': derived.doubled }, children);
}
export default Component9296;
