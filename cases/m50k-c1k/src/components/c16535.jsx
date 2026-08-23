import React from 'react';
const LABEL_16535 = 'component_16535';
export function Component16535({ value = 16535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16535, 'data-value': derived.doubled }, children);
}
export default Component16535;
