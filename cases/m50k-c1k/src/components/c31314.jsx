import React from 'react';
const LABEL_31314 = 'component_31314';
export function Component31314({ value = 31314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31314, 'data-value': derived.doubled }, children);
}
export default Component31314;
