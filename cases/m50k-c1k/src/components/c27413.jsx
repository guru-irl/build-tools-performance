import React from 'react';
const LABEL_27413 = 'component_27413';
export function Component27413({ value = 27413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27413, 'data-value': derived.doubled }, children);
}
export default Component27413;
