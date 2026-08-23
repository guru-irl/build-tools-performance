import React from 'react';
const LABEL_27113 = 'component_27113';
export function Component27113({ value = 27113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27113, 'data-value': derived.doubled }, children);
}
export default Component27113;
