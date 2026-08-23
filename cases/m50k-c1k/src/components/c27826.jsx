import React from 'react';
const LABEL_27826 = 'component_27826';
export function Component27826({ value = 27826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27826, 'data-value': derived.doubled }, children);
}
export default Component27826;
