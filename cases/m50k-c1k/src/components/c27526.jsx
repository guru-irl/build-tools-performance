import React from 'react';
const LABEL_27526 = 'component_27526';
export function Component27526({ value = 27526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27526, 'data-value': derived.doubled }, children);
}
export default Component27526;
