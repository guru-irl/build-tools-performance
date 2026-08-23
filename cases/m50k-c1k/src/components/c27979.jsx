import React from 'react';
const LABEL_27979 = 'component_27979';
export function Component27979({ value = 27979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27979, 'data-value': derived.doubled }, children);
}
export default Component27979;
