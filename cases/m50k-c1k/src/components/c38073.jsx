import React from 'react';
const LABEL_38073 = 'component_38073';
export function Component38073({ value = 38073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38073, 'data-value': derived.doubled }, children);
}
export default Component38073;
