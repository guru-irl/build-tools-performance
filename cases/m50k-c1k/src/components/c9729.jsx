import React from 'react';
const LABEL_9729 = 'component_9729';
export function Component9729({ value = 9729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9729, 'data-value': derived.doubled }, children);
}
export default Component9729;
