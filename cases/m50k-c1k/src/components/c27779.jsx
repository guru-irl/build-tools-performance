import React from 'react';
const LABEL_27779 = 'component_27779';
export function Component27779({ value = 27779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27779, 'data-value': derived.doubled }, children);
}
export default Component27779;
