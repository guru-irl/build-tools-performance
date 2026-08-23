import React from 'react';
const LABEL_27608 = 'component_27608';
export function Component27608({ value = 27608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27608, 'data-value': derived.doubled }, children);
}
export default Component27608;
