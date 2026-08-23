import React from 'react';
const LABEL_46032 = 'component_46032';
export function Component46032({ value = 46032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46032, 'data-value': derived.doubled }, children);
}
export default Component46032;
