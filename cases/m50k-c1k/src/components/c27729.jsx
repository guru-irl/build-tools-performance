import React from 'react';
const LABEL_27729 = 'component_27729';
export function Component27729({ value = 27729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27729, 'data-value': derived.doubled }, children);
}
export default Component27729;
