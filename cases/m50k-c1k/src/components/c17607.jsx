import React from 'react';
const LABEL_17607 = 'component_17607';
export function Component17607({ value = 17607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17607, 'data-value': derived.doubled }, children);
}
export default Component17607;
