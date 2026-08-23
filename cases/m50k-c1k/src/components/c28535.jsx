import React from 'react';
const LABEL_28535 = 'component_28535';
export function Component28535({ value = 28535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28535, 'data-value': derived.doubled }, children);
}
export default Component28535;
