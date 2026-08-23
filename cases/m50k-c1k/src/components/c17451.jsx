import React from 'react';
const LABEL_17451 = 'component_17451';
export function Component17451({ value = 17451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17451, 'data-value': derived.doubled }, children);
}
export default Component17451;
