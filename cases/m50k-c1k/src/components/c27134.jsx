import React from 'react';
const LABEL_27134 = 'component_27134';
export function Component27134({ value = 27134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27134, 'data-value': derived.doubled }, children);
}
export default Component27134;
