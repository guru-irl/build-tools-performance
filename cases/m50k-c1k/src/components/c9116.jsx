import React from 'react';
const LABEL_9116 = 'component_9116';
export function Component9116({ value = 9116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9116, 'data-value': derived.doubled }, children);
}
export default Component9116;
