import React from 'react';
const LABEL_33526 = 'component_33526';
export function Component33526({ value = 33526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33526, 'data-value': derived.doubled }, children);
}
export default Component33526;
