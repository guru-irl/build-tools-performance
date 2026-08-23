import React from 'react';
const LABEL_23629 = 'component_23629';
export function Component23629({ value = 23629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23629, 'data-value': derived.doubled }, children);
}
export default Component23629;
