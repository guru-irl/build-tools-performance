import React from 'react';
const LABEL_21535 = 'component_21535';
export function Component21535({ value = 21535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21535, 'data-value': derived.doubled }, children);
}
export default Component21535;
