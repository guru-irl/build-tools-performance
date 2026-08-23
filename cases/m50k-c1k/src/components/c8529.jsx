import React from 'react';
const LABEL_8529 = 'component_8529';
export function Component8529({ value = 8529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8529, 'data-value': derived.doubled }, children);
}
export default Component8529;
