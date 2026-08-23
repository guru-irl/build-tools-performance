import React from 'react';
const LABEL_9692 = 'component_9692';
export function Component9692({ value = 9692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9692, 'data-value': derived.doubled }, children);
}
export default Component9692;
