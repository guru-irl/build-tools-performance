import React from 'react';
const LABEL_27359 = 'component_27359';
export function Component27359({ value = 27359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27359, 'data-value': derived.doubled }, children);
}
export default Component27359;
