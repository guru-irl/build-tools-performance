import React from 'react';
const LABEL_27074 = 'component_27074';
export function Component27074({ value = 27074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27074, 'data-value': derived.doubled }, children);
}
export default Component27074;
