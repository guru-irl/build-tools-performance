import React from 'react';
const LABEL_31032 = 'component_31032';
export function Component31032({ value = 31032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31032, 'data-value': derived.doubled }, children);
}
export default Component31032;
