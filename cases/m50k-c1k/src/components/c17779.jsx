import React from 'react';
const LABEL_17779 = 'component_17779';
export function Component17779({ value = 17779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17779, 'data-value': derived.doubled }, children);
}
export default Component17779;
