import React from 'react';
const LABEL_8453 = 'component_8453';
export function Component8453({ value = 8453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8453, 'data-value': derived.doubled }, children);
}
export default Component8453;
