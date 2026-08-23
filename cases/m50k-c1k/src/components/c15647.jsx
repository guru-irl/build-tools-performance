import React from 'react';
const LABEL_15647 = 'component_15647';
export function Component15647({ value = 15647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15647, 'data-value': derived.doubled }, children);
}
export default Component15647;
