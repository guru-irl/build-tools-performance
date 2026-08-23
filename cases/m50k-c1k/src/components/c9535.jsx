import React from 'react';
const LABEL_9535 = 'component_9535';
export function Component9535({ value = 9535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9535, 'data-value': derived.doubled }, children);
}
export default Component9535;
