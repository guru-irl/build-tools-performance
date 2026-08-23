import React from 'react';
const LABEL_38124 = 'component_38124';
export function Component38124({ value = 38124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38124, 'data-value': derived.doubled }, children);
}
export default Component38124;
