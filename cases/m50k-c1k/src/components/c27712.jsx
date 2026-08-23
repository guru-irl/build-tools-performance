import React from 'react';
const LABEL_27712 = 'component_27712';
export function Component27712({ value = 27712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27712, 'data-value': derived.doubled }, children);
}
export default Component27712;
