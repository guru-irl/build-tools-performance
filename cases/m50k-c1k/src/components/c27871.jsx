import React from 'react';
const LABEL_27871 = 'component_27871';
export function Component27871({ value = 27871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27871, 'data-value': derived.doubled }, children);
}
export default Component27871;
