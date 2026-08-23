import React from 'react';
const LABEL_9476 = 'component_9476';
export function Component9476({ value = 9476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9476, 'data-value': derived.doubled }, children);
}
export default Component9476;
