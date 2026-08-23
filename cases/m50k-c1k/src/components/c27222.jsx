import React from 'react';
const LABEL_27222 = 'component_27222';
export function Component27222({ value = 27222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27222, 'data-value': derived.doubled }, children);
}
export default Component27222;
