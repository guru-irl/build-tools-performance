import React from 'react';
const LABEL_17399 = 'component_17399';
export function Component17399({ value = 17399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17399, 'data-value': derived.doubled }, children);
}
export default Component17399;
