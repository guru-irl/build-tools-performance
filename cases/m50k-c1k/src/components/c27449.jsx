import React from 'react';
const LABEL_27449 = 'component_27449';
export function Component27449({ value = 27449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27449, 'data-value': derived.doubled }, children);
}
export default Component27449;
