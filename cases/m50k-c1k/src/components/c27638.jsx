import React from 'react';
const LABEL_27638 = 'component_27638';
export function Component27638({ value = 27638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27638, 'data-value': derived.doubled }, children);
}
export default Component27638;
