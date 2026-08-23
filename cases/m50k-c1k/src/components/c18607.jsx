import React from 'react';
const LABEL_18607 = 'component_18607';
export function Component18607({ value = 18607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18607, 'data-value': derived.doubled }, children);
}
export default Component18607;
