import React from 'react';
const LABEL_17503 = 'component_17503';
export function Component17503({ value = 17503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17503, 'data-value': derived.doubled }, children);
}
export default Component17503;
