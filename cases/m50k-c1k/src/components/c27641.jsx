import React from 'react';
const LABEL_27641 = 'component_27641';
export function Component27641({ value = 27641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27641, 'data-value': derived.doubled }, children);
}
export default Component27641;
