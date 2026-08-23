import React from 'react';
const LABEL_5032 = 'component_5032';
export function Component5032({ value = 5032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5032, 'data-value': derived.doubled }, children);
}
export default Component5032;
