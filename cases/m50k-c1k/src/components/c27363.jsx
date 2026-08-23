import React from 'react';
const LABEL_27363 = 'component_27363';
export function Component27363({ value = 27363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27363, 'data-value': derived.doubled }, children);
}
export default Component27363;
