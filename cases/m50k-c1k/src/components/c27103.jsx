import React from 'react';
const LABEL_27103 = 'component_27103';
export function Component27103({ value = 27103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27103, 'data-value': derived.doubled }, children);
}
export default Component27103;
