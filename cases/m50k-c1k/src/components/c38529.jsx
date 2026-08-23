import React from 'react';
const LABEL_38529 = 'component_38529';
export function Component38529({ value = 38529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38529, 'data-value': derived.doubled }, children);
}
export default Component38529;
