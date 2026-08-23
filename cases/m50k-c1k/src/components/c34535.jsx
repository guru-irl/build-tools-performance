import React from 'react';
const LABEL_34535 = 'component_34535';
export function Component34535({ value = 34535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34535, 'data-value': derived.doubled }, children);
}
export default Component34535;
