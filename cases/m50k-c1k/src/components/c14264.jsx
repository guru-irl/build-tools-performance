import React from 'react';
const LABEL_14264 = 'component_14264';
export function Component14264({ value = 14264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14264, 'data-value': derived.doubled }, children);
}
export default Component14264;
