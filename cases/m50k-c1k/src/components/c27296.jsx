import React from 'react';
const LABEL_27296 = 'component_27296';
export function Component27296({ value = 27296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27296, 'data-value': derived.doubled }, children);
}
export default Component27296;
