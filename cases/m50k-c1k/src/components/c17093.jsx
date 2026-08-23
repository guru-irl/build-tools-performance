import React from 'react';
const LABEL_17093 = 'component_17093';
export function Component17093({ value = 17093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17093, 'data-value': derived.doubled }, children);
}
export default Component17093;
