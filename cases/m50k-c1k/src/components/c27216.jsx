import React from 'react';
const LABEL_27216 = 'component_27216';
export function Component27216({ value = 27216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27216, 'data-value': derived.doubled }, children);
}
export default Component27216;
