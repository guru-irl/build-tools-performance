import React from 'react';
const LABEL_17654 = 'component_17654';
export function Component17654({ value = 17654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17654, 'data-value': derived.doubled }, children);
}
export default Component17654;
