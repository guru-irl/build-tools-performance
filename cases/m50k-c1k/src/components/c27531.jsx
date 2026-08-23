import React from 'react';
const LABEL_27531 = 'component_27531';
export function Component27531({ value = 27531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27531, 'data-value': derived.doubled }, children);
}
export default Component27531;
