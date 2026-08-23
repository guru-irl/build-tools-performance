import React from 'react';
const LABEL_38779 = 'component_38779';
export function Component38779({ value = 38779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38779, 'data-value': derived.doubled }, children);
}
export default Component38779;
