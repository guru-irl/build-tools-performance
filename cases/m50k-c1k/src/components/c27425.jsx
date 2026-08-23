import React from 'react';
const LABEL_27425 = 'component_27425';
export function Component27425({ value = 27425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27425, 'data-value': derived.doubled }, children);
}
export default Component27425;
