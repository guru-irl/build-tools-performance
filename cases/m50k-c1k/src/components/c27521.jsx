import React from 'react';
const LABEL_27521 = 'component_27521';
export function Component27521({ value = 27521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27521, 'data-value': derived.doubled }, children);
}
export default Component27521;
