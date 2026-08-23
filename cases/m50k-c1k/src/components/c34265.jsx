import React from 'react';
const LABEL_34265 = 'component_34265';
export function Component34265({ value = 34265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34265, 'data-value': derived.doubled }, children);
}
export default Component34265;
