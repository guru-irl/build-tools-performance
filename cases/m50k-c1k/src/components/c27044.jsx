import React from 'react';
const LABEL_27044 = 'component_27044';
export function Component27044({ value = 27044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27044, 'data-value': derived.doubled }, children);
}
export default Component27044;
