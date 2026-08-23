import React from 'react';
const LABEL_27861 = 'component_27861';
export function Component27861({ value = 27861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27861, 'data-value': derived.doubled }, children);
}
export default Component27861;
