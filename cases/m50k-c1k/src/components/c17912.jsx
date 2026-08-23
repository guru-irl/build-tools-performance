import React from 'react';
const LABEL_17912 = 'component_17912';
export function Component17912({ value = 17912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17912, 'data-value': derived.doubled }, children);
}
export default Component17912;
