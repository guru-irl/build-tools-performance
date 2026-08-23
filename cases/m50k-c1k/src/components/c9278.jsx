import React from 'react';
const LABEL_9278 = 'component_9278';
export function Component9278({ value = 9278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9278, 'data-value': derived.doubled }, children);
}
export default Component9278;
