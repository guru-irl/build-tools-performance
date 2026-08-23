import React from 'react';
const LABEL_27602 = 'component_27602';
export function Component27602({ value = 27602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27602, 'data-value': derived.doubled }, children);
}
export default Component27602;
