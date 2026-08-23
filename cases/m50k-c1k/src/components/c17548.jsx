import React from 'react';
const LABEL_17548 = 'component_17548';
export function Component17548({ value = 17548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17548, 'data-value': derived.doubled }, children);
}
export default Component17548;
