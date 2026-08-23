import React from 'react';
const LABEL_38753 = 'component_38753';
export function Component38753({ value = 38753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38753, 'data-value': derived.doubled }, children);
}
export default Component38753;
