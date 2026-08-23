import React from 'react';
const LABEL_27512 = 'component_27512';
export function Component27512({ value = 27512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27512, 'data-value': derived.doubled }, children);
}
export default Component27512;
