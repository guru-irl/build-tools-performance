import React from 'react';
const LABEL_22535 = 'component_22535';
export function Component22535({ value = 22535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22535, 'data-value': derived.doubled }, children);
}
export default Component22535;
