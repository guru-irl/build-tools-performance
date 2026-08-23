import React from 'react';
const LABEL_18535 = 'component_18535';
export function Component18535({ value = 18535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18535, 'data-value': derived.doubled }, children);
}
export default Component18535;
