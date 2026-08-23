import React from 'react';
const LABEL_27855 = 'component_27855';
export function Component27855({ value = 27855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27855, 'data-value': derived.doubled }, children);
}
export default Component27855;
