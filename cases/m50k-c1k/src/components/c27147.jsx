import React from 'react';
const LABEL_27147 = 'component_27147';
export function Component27147({ value = 27147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27147, 'data-value': derived.doubled }, children);
}
export default Component27147;
