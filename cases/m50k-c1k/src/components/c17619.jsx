import React from 'react';
const LABEL_17619 = 'component_17619';
export function Component17619({ value = 17619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17619, 'data-value': derived.doubled }, children);
}
export default Component17619;
