import React from 'react';
const LABEL_27174 = 'component_27174';
export function Component27174({ value = 27174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27174, 'data-value': derived.doubled }, children);
}
export default Component27174;
