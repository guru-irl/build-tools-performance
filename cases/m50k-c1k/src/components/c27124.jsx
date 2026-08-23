import React from 'react';
const LABEL_27124 = 'component_27124';
export function Component27124({ value = 27124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27124, 'data-value': derived.doubled }, children);
}
export default Component27124;
