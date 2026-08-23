import React from 'react';
const LABEL_27254 = 'component_27254';
export function Component27254({ value = 27254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27254, 'data-value': derived.doubled }, children);
}
export default Component27254;
