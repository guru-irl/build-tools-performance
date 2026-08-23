import React from 'react';
const LABEL_9631 = 'component_9631';
export function Component9631({ value = 9631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9631, 'data-value': derived.doubled }, children);
}
export default Component9631;
