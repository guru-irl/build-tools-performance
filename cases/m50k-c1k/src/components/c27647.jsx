import React from 'react';
const LABEL_27647 = 'component_27647';
export function Component27647({ value = 27647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27647, 'data-value': derived.doubled }, children);
}
export default Component27647;
