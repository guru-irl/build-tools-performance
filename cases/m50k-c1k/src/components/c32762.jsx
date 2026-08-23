import React from 'react';
const LABEL_32762 = 'component_32762';
export function Component32762({ value = 32762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32762, 'data-value': derived.doubled }, children);
}
export default Component32762;
