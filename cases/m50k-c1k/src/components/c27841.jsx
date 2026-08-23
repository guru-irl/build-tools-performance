import React from 'react';
const LABEL_27841 = 'component_27841';
export function Component27841({ value = 27841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27841, 'data-value': derived.doubled }, children);
}
export default Component27841;
