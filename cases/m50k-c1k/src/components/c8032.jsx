import React from 'react';
const LABEL_8032 = 'component_8032';
export function Component8032({ value = 8032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8032, 'data-value': derived.doubled }, children);
}
export default Component8032;
