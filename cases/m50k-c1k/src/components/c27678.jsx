import React from 'react';
const LABEL_27678 = 'component_27678';
export function Component27678({ value = 27678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27678, 'data-value': derived.doubled }, children);
}
export default Component27678;
