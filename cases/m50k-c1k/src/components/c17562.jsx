import React from 'react';
const LABEL_17562 = 'component_17562';
export function Component17562({ value = 17562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17562, 'data-value': derived.doubled }, children);
}
export default Component17562;
