import React from 'react';
const LABEL_27154 = 'component_27154';
export function Component27154({ value = 27154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27154, 'data-value': derived.doubled }, children);
}
export default Component27154;
