import React from 'react';
const LABEL_18761 = 'component_18761';
export function Component18761({ value = 18761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18761, 'data-value': derived.doubled }, children);
}
export default Component18761;
