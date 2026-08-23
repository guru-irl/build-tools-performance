import React from 'react';
const LABEL_27027 = 'component_27027';
export function Component27027({ value = 27027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27027, 'data-value': derived.doubled }, children);
}
export default Component27027;
