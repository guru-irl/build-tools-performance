import React from 'react';
const LABEL_44826 = 'component_44826';
export function Component44826({ value = 44826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44826, 'data-value': derived.doubled }, children);
}
export default Component44826;
