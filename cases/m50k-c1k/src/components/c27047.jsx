import React from 'react';
const LABEL_27047 = 'component_27047';
export function Component27047({ value = 27047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27047, 'data-value': derived.doubled }, children);
}
export default Component27047;
