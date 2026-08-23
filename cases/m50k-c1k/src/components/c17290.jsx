import React from 'react';
const LABEL_17290 = 'component_17290';
export function Component17290({ value = 17290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17290, 'data-value': derived.doubled }, children);
}
export default Component17290;
