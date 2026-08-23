import React from 'react';
const LABEL_9757 = 'component_9757';
export function Component9757({ value = 9757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9757, 'data-value': derived.doubled }, children);
}
export default Component9757;
