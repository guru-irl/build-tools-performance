import React from 'react';
const LABEL_40918 = 'component_40918';
export function Component40918({ value = 40918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40918, 'data-value': derived.doubled }, children);
}
export default Component40918;
