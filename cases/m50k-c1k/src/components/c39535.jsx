import React from 'react';
const LABEL_39535 = 'component_39535';
export function Component39535({ value = 39535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39535, 'data-value': derived.doubled }, children);
}
export default Component39535;
