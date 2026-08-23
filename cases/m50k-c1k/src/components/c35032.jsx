import React from 'react';
const LABEL_35032 = 'component_35032';
export function Component35032({ value = 35032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35032, 'data-value': derived.doubled }, children);
}
export default Component35032;
