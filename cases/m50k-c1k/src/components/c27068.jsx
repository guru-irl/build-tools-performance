import React from 'react';
const LABEL_27068 = 'component_27068';
export function Component27068({ value = 27068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27068, 'data-value': derived.doubled }, children);
}
export default Component27068;
