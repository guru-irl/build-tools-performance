import React from 'react';
const LABEL_35535 = 'component_35535';
export function Component35535({ value = 35535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35535, 'data-value': derived.doubled }, children);
}
export default Component35535;
