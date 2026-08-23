import React from 'react';
const LABEL_45211 = 'component_45211';
export function Component45211({ value = 45211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45211, 'data-value': derived.doubled }, children);
}
export default Component45211;
