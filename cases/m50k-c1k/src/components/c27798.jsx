import React from 'react';
const LABEL_27798 = 'component_27798';
export function Component27798({ value = 27798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27798, 'data-value': derived.doubled }, children);
}
export default Component27798;
