import React from 'react';
const LABEL_27215 = 'component_27215';
export function Component27215({ value = 27215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27215, 'data-value': derived.doubled }, children);
}
export default Component27215;
