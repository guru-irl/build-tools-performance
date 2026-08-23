import React from 'react';
const LABEL_27109 = 'component_27109';
export function Component27109({ value = 27109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27109, 'data-value': derived.doubled }, children);
}
export default Component27109;
