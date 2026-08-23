import React from 'react';
const LABEL_27241 = 'component_27241';
export function Component27241({ value = 27241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27241, 'data-value': derived.doubled }, children);
}
export default Component27241;
