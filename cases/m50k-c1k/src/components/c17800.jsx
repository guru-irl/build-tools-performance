import React from 'react';
const LABEL_17800 = 'component_17800';
export function Component17800({ value = 17800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17800, 'data-value': derived.doubled }, children);
}
export default Component17800;
