import React from 'react';
const LABEL_27654 = 'component_27654';
export function Component27654({ value = 27654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27654, 'data-value': derived.doubled }, children);
}
export default Component27654;
