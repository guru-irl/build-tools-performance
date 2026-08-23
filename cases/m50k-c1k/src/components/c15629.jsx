import React from 'react';
const LABEL_15629 = 'component_15629';
export function Component15629({ value = 15629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15629, 'data-value': derived.doubled }, children);
}
export default Component15629;
