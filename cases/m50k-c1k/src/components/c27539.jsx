import React from 'react';
const LABEL_27539 = 'component_27539';
export function Component27539({ value = 27539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27539, 'data-value': derived.doubled }, children);
}
export default Component27539;
