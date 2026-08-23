import React from 'react';
const LABEL_32377 = 'component_32377';
export function Component32377({ value = 32377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32377, 'data-value': derived.doubled }, children);
}
export default Component32377;
