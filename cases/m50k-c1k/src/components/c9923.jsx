import React from 'react';
const LABEL_9923 = 'component_9923';
export function Component9923({ value = 9923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9923, 'data-value': derived.doubled }, children);
}
export default Component9923;
