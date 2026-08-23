import React from 'react';
const LABEL_9237 = 'component_9237';
export function Component9237({ value = 9237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9237, 'data-value': derived.doubled }, children);
}
export default Component9237;
