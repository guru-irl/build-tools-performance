import React from 'react';
const LABEL_9323 = 'component_9323';
export function Component9323({ value = 9323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9323, 'data-value': derived.doubled }, children);
}
export default Component9323;
