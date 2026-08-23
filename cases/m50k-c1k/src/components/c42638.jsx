import React from 'react';
const LABEL_42638 = 'component_42638';
export function Component42638({ value = 42638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42638, 'data-value': derived.doubled }, children);
}
export default Component42638;
