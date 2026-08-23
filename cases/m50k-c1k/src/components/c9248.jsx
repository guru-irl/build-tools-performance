import React from 'react';
const LABEL_9248 = 'component_9248';
export function Component9248({ value = 9248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9248, 'data-value': derived.doubled }, children);
}
export default Component9248;
