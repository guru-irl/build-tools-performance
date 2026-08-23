import React from 'react';
const LABEL_33779 = 'component_33779';
export function Component33779({ value = 33779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33779, 'data-value': derived.doubled }, children);
}
export default Component33779;
