import React from 'react';
const LABEL_27116 = 'component_27116';
export function Component27116({ value = 27116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27116, 'data-value': derived.doubled }, children);
}
export default Component27116;
