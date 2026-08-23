import React from 'react';
const LABEL_27284 = 'component_27284';
export function Component27284({ value = 27284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27284, 'data-value': derived.doubled }, children);
}
export default Component27284;
