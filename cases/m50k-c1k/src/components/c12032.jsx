import React from 'react';
const LABEL_12032 = 'component_12032';
export function Component12032({ value = 12032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12032, 'data-value': derived.doubled }, children);
}
export default Component12032;
