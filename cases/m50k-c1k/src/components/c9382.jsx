import React from 'react';
const LABEL_9382 = 'component_9382';
export function Component9382({ value = 9382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9382, 'data-value': derived.doubled }, children);
}
export default Component9382;
