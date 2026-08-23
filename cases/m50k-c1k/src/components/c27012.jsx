import React from 'react';
const LABEL_27012 = 'component_27012';
export function Component27012({ value = 27012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27012, 'data-value': derived.doubled }, children);
}
export default Component27012;
