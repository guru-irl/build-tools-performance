import React from 'react';
const LABEL_27542 = 'component_27542';
export function Component27542({ value = 27542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27542, 'data-value': derived.doubled }, children);
}
export default Component27542;
