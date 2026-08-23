import React from 'react';
const LABEL_27330 = 'component_27330';
export function Component27330({ value = 27330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27330, 'data-value': derived.doubled }, children);
}
export default Component27330;
