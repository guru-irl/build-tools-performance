import React from 'react';
const LABEL_17369 = 'component_17369';
export function Component17369({ value = 17369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17369, 'data-value': derived.doubled }, children);
}
export default Component17369;
