import React from 'react';
const LABEL_27777 = 'component_27777';
export function Component27777({ value = 27777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27777, 'data-value': derived.doubled }, children);
}
export default Component27777;
