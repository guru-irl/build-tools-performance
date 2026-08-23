import React from 'react';
const LABEL_27926 = 'component_27926';
export function Component27926({ value = 27926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27926, 'data-value': derived.doubled }, children);
}
export default Component27926;
