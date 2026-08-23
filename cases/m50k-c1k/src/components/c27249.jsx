import React from 'react';
const LABEL_27249 = 'component_27249';
export function Component27249({ value = 27249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27249, 'data-value': derived.doubled }, children);
}
export default Component27249;
