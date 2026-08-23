import React from 'react';
const LABEL_27328 = 'component_27328';
export function Component27328({ value = 27328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27328, 'data-value': derived.doubled }, children);
}
export default Component27328;
