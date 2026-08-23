import React from 'react';
const LABEL_9777 = 'component_9777';
export function Component9777({ value = 9777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9777, 'data-value': derived.doubled }, children);
}
export default Component9777;
