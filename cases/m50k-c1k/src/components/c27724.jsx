import React from 'react';
const LABEL_27724 = 'component_27724';
export function Component27724({ value = 27724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27724, 'data-value': derived.doubled }, children);
}
export default Component27724;
