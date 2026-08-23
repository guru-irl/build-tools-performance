import React from 'react';
const LABEL_9227 = 'component_9227';
export function Component9227({ value = 9227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9227, 'data-value': derived.doubled }, children);
}
export default Component9227;
