import React from 'react';
const LABEL_17535 = 'component_17535';
export function Component17535({ value = 17535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17535, 'data-value': derived.doubled }, children);
}
export default Component17535;
