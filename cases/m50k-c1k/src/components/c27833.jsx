import React from 'react';
const LABEL_27833 = 'component_27833';
export function Component27833({ value = 27833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27833, 'data-value': derived.doubled }, children);
}
export default Component27833;
