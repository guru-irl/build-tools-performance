import React from 'react';
const LABEL_27252 = 'component_27252';
export function Component27252({ value = 27252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27252, 'data-value': derived.doubled }, children);
}
export default Component27252;
