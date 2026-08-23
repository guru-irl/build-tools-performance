import React from 'react';
const LABEL_22707 = 'component_22707';
export function Component22707({ value = 22707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22707, 'data-value': derived.doubled }, children);
}
export default Component22707;
