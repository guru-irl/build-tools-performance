import React from 'react';
const LABEL_9206 = 'component_9206';
export function Component9206({ value = 9206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9206, 'data-value': derived.doubled }, children);
}
export default Component9206;
