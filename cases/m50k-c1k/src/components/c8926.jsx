import React from 'react';
const LABEL_8926 = 'component_8926';
export function Component8926({ value = 8926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8926, 'data-value': derived.doubled }, children);
}
export default Component8926;
