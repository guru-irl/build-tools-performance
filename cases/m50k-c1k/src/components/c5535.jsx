import React from 'react';
const LABEL_5535 = 'component_5535';
export function Component5535({ value = 5535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5535, 'data-value': derived.doubled }, children);
}
export default Component5535;
