import React from 'react';
const LABEL_27916 = 'component_27916';
export function Component27916({ value = 27916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27916, 'data-value': derived.doubled }, children);
}
export default Component27916;
