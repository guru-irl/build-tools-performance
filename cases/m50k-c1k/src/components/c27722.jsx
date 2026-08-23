import React from 'react';
const LABEL_27722 = 'component_27722';
export function Component27722({ value = 27722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27722, 'data-value': derived.doubled }, children);
}
export default Component27722;
