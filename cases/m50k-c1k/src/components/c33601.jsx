import React from 'react';
const LABEL_33601 = 'component_33601';
export function Component33601({ value = 33601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33601, 'data-value': derived.doubled }, children);
}
export default Component33601;
