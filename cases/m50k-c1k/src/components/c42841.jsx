import React from 'react';
const LABEL_42841 = 'component_42841';
export function Component42841({ value = 42841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42841, 'data-value': derived.doubled }, children);
}
export default Component42841;
