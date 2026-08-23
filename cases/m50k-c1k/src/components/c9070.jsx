import React from 'react';
const LABEL_9070 = 'component_9070';
export function Component9070({ value = 9070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9070, 'data-value': derived.doubled }, children);
}
export default Component9070;
