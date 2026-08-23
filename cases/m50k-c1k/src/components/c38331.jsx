import React from 'react';
const LABEL_38331 = 'component_38331';
export function Component38331({ value = 38331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38331, 'data-value': derived.doubled }, children);
}
export default Component38331;
