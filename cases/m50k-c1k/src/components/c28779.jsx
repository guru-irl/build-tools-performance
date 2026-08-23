import React from 'react';
const LABEL_28779 = 'component_28779';
export function Component28779({ value = 28779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28779, 'data-value': derived.doubled }, children);
}
export default Component28779;
