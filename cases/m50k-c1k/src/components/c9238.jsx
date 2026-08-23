import React from 'react';
const LABEL_9238 = 'component_9238';
export function Component9238({ value = 9238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9238, 'data-value': derived.doubled }, children);
}
export default Component9238;
