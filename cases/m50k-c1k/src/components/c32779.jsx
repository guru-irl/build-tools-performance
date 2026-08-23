import React from 'react';
const LABEL_32779 = 'component_32779';
export function Component32779({ value = 32779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32779, 'data-value': derived.doubled }, children);
}
export default Component32779;
