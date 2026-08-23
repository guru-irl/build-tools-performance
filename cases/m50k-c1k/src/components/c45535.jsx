import React from 'react';
const LABEL_45535 = 'component_45535';
export function Component45535({ value = 45535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45535, 'data-value': derived.doubled }, children);
}
export default Component45535;
