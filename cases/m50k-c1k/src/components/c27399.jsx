import React from 'react';
const LABEL_27399 = 'component_27399';
export function Component27399({ value = 27399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27399, 'data-value': derived.doubled }, children);
}
export default Component27399;
