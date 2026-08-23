import React from 'react';
const LABEL_24535 = 'component_24535';
export function Component24535({ value = 24535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24535, 'data-value': derived.doubled }, children);
}
export default Component24535;
