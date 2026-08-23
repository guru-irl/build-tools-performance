import React from 'react';
const LABEL_27089 = 'component_27089';
export function Component27089({ value = 27089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27089, 'data-value': derived.doubled }, children);
}
export default Component27089;
