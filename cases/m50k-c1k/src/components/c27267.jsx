import React from 'react';
const LABEL_27267 = 'component_27267';
export function Component27267({ value = 27267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27267, 'data-value': derived.doubled }, children);
}
export default Component27267;
