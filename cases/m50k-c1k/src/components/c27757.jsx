import React from 'react';
const LABEL_27757 = 'component_27757';
export function Component27757({ value = 27757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27757, 'data-value': derived.doubled }, children);
}
export default Component27757;
