import React from 'react';
const LABEL_27700 = 'component_27700';
export function Component27700({ value = 27700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27700, 'data-value': derived.doubled }, children);
}
export default Component27700;
