import React from 'react';
const LABEL_27548 = 'component_27548';
export function Component27548({ value = 27548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27548, 'data-value': derived.doubled }, children);
}
export default Component27548;
