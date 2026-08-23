import React from 'react';
const LABEL_46529 = 'component_46529';
export function Component46529({ value = 46529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46529, 'data-value': derived.doubled }, children);
}
export default Component46529;
