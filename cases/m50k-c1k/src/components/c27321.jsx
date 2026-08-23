import React from 'react';
const LABEL_27321 = 'component_27321';
export function Component27321({ value = 27321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27321, 'data-value': derived.doubled }, children);
}
export default Component27321;
