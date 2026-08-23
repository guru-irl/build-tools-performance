import React from 'react';
const LABEL_27167 = 'component_27167';
export function Component27167({ value = 27167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27167, 'data-value': derived.doubled }, children);
}
export default Component27167;
