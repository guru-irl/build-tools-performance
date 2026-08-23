import React from 'react';
const LABEL_7653 = 'component_7653';
export function Component7653({ value = 7653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7653, 'data-value': derived.doubled }, children);
}
export default Component7653;
