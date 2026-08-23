import React from 'react';
const LABEL_27917 = 'component_27917';
export function Component27917({ value = 27917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27917, 'data-value': derived.doubled }, children);
}
export default Component27917;
