import React from 'react';
const LABEL_27251 = 'component_27251';
export function Component27251({ value = 27251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27251, 'data-value': derived.doubled }, children);
}
export default Component27251;
