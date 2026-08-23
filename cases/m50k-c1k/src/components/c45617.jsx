import React from 'react';
const LABEL_45617 = 'component_45617';
export function Component45617({ value = 45617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45617, 'data-value': derived.doubled }, children);
}
export default Component45617;
