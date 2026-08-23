import React from 'react';
const LABEL_26032 = 'component_26032';
export function Component26032({ value = 26032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26032, 'data-value': derived.doubled }, children);
}
export default Component26032;
