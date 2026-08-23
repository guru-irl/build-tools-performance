import React from 'react';
const LABEL_27959 = 'component_27959';
export function Component27959({ value = 27959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27959, 'data-value': derived.doubled }, children);
}
export default Component27959;
