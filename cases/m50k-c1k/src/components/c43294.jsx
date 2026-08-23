import React from 'react';
const LABEL_43294 = 'component_43294';
export function Component43294({ value = 43294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43294, 'data-value': derived.doubled }, children);
}
export default Component43294;
