import React from 'react';
const LABEL_27760 = 'component_27760';
export function Component27760({ value = 27760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27760, 'data-value': derived.doubled }, children);
}
export default Component27760;
