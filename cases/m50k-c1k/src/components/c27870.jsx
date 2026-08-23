import React from 'react';
const LABEL_27870 = 'component_27870';
export function Component27870({ value = 27870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27870, 'data-value': derived.doubled }, children);
}
export default Component27870;
