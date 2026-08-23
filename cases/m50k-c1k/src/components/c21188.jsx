import React from 'react';
const LABEL_21188 = 'component_21188';
export function Component21188({ value = 21188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21188, 'data-value': derived.doubled }, children);
}
export default Component21188;
