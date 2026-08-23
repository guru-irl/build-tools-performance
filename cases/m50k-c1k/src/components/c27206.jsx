import React from 'react';
const LABEL_27206 = 'component_27206';
export function Component27206({ value = 27206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27206, 'data-value': derived.doubled }, children);
}
export default Component27206;
