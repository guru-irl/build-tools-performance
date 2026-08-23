import React from 'react';
const LABEL_9475 = 'component_9475';
export function Component9475({ value = 9475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9475, 'data-value': derived.doubled }, children);
}
export default Component9475;
