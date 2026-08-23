import React from 'react';
const LABEL_27072 = 'component_27072';
export function Component27072({ value = 27072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27072, 'data-value': derived.doubled }, children);
}
export default Component27072;
