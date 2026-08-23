import React from 'react';
const LABEL_9473 = 'component_9473';
export function Component9473({ value = 9473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9473, 'data-value': derived.doubled }, children);
}
export default Component9473;
