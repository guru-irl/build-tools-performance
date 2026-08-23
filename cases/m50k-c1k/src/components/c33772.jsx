import React from 'react';
const LABEL_33772 = 'component_33772';
export function Component33772({ value = 33772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33772, 'data-value': derived.doubled }, children);
}
export default Component33772;
