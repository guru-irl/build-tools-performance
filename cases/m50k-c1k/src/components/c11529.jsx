import React from 'react';
const LABEL_11529 = 'component_11529';
export function Component11529({ value = 11529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11529, 'data-value': derived.doubled }, children);
}
export default Component11529;
