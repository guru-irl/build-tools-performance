import React from 'react';
const LABEL_27445 = 'component_27445';
export function Component27445({ value = 27445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27445, 'data-value': derived.doubled }, children);
}
export default Component27445;
