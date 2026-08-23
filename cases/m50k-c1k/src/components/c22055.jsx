import React from 'react';
const LABEL_22055 = 'component_22055';
export function Component22055({ value = 22055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22055, 'data-value': derived.doubled }, children);
}
export default Component22055;
