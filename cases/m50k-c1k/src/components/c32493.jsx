import React from 'react';
const LABEL_32493 = 'component_32493';
export function Component32493({ value = 32493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32493, 'data-value': derived.doubled }, children);
}
export default Component32493;
