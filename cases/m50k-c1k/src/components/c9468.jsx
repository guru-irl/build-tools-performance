import React from 'react';
const LABEL_9468 = 'component_9468';
export function Component9468({ value = 9468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9468, 'data-value': derived.doubled }, children);
}
export default Component9468;
