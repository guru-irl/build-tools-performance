import React from 'react';
const LABEL_33599 = 'component_33599';
export function Component33599({ value = 33599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33599, 'data-value': derived.doubled }, children);
}
export default Component33599;
