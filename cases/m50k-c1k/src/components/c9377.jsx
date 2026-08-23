import React from 'react';
const LABEL_9377 = 'component_9377';
export function Component9377({ value = 9377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9377, 'data-value': derived.doubled }, children);
}
export default Component9377;
