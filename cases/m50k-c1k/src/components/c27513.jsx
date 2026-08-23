import React from 'react';
const LABEL_27513 = 'component_27513';
export function Component27513({ value = 27513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27513, 'data-value': derived.doubled }, children);
}
export default Component27513;
