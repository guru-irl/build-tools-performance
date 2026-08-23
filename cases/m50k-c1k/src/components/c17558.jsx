import React from 'react';
const LABEL_17558 = 'component_17558';
export function Component17558({ value = 17558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17558, 'data-value': derived.doubled }, children);
}
export default Component17558;
