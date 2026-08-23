import React from 'react';
const LABEL_27430 = 'component_27430';
export function Component27430({ value = 27430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27430, 'data-value': derived.doubled }, children);
}
export default Component27430;
