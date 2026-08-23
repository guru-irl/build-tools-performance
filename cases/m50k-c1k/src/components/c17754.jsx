import React from 'react';
const LABEL_17754 = 'component_17754';
export function Component17754({ value = 17754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17754, 'data-value': derived.doubled }, children);
}
export default Component17754;
