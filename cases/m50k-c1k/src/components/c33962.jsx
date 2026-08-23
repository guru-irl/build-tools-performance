import React from 'react';
const LABEL_33962 = 'component_33962';
export function Component33962({ value = 33962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33962, 'data-value': derived.doubled }, children);
}
export default Component33962;
