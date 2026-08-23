import React from 'react';
const LABEL_40535 = 'component_40535';
export function Component40535({ value = 40535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40535, 'data-value': derived.doubled }, children);
}
export default Component40535;
