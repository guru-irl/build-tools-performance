import React from 'react';
const LABEL_27835 = 'component_27835';
export function Component27835({ value = 27835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27835, 'data-value': derived.doubled }, children);
}
export default Component27835;
