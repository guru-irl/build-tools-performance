import React from 'react';
const LABEL_27207 = 'component_27207';
export function Component27207({ value = 27207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27207, 'data-value': derived.doubled }, children);
}
export default Component27207;
