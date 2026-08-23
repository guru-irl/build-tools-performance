import React from 'react';
const LABEL_33827 = 'component_33827';
export function Component33827({ value = 33827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33827, 'data-value': derived.doubled }, children);
}
export default Component33827;
