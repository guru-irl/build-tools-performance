import React from 'react';
const LABEL_27945 = 'component_27945';
export function Component27945({ value = 27945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27945, 'data-value': derived.doubled }, children);
}
export default Component27945;
