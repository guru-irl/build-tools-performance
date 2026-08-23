import React from 'react';
const LABEL_15871 = 'component_15871';
export function Component15871({ value = 15871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15871, 'data-value': derived.doubled }, children);
}
export default Component15871;
