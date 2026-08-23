import React from 'react';
const LABEL_27796 = 'component_27796';
export function Component27796({ value = 27796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27796, 'data-value': derived.doubled }, children);
}
export default Component27796;
