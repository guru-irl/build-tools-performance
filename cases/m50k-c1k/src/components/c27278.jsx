import React from 'react';
const LABEL_27278 = 'component_27278';
export function Component27278({ value = 27278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27278, 'data-value': derived.doubled }, children);
}
export default Component27278;
