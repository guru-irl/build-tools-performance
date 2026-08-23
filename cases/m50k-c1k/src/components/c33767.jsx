import React from 'react';
const LABEL_33767 = 'component_33767';
export function Component33767({ value = 33767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33767, 'data-value': derived.doubled }, children);
}
export default Component33767;
