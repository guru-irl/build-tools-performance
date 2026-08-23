import React from 'react';
const LABEL_43157 = 'component_43157';
export function Component43157({ value = 43157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43157, 'data-value': derived.doubled }, children);
}
export default Component43157;
