import React from 'react';
const LABEL_9950 = 'component_9950';
export function Component9950({ value = 9950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9950, 'data-value': derived.doubled }, children);
}
export default Component9950;
