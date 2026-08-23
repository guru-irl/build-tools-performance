import React from 'react';
const LABEL_34571 = 'component_34571';
export function Component34571({ value = 34571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34571, 'data-value': derived.doubled }, children);
}
export default Component34571;
