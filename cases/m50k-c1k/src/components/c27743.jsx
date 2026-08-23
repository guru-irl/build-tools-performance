import React from 'react';
const LABEL_27743 = 'component_27743';
export function Component27743({ value = 27743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27743, 'data-value': derived.doubled }, children);
}
export default Component27743;
