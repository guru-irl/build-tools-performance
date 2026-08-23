import React from 'react';
const LABEL_43535 = 'component_43535';
export function Component43535({ value = 43535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43535, 'data-value': derived.doubled }, children);
}
export default Component43535;
