import React from 'react';
const LABEL_27201 = 'component_27201';
export function Component27201({ value = 27201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27201, 'data-value': derived.doubled }, children);
}
export default Component27201;
