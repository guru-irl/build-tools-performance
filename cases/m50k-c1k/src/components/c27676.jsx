import React from 'react';
const LABEL_27676 = 'component_27676';
export function Component27676({ value = 27676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27676, 'data-value': derived.doubled }, children);
}
export default Component27676;
