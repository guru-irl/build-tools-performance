import React from 'react';
const LABEL_9918 = 'component_9918';
export function Component9918({ value = 9918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9918, 'data-value': derived.doubled }, children);
}
export default Component9918;
