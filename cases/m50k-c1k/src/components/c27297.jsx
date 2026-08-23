import React from 'react';
const LABEL_27297 = 'component_27297';
export function Component27297({ value = 27297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27297, 'data-value': derived.doubled }, children);
}
export default Component27297;
