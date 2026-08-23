import React from 'react';
const LABEL_22668 = 'component_22668';
export function Component22668({ value = 22668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22668, 'data-value': derived.doubled }, children);
}
export default Component22668;
