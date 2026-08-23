import React from 'react';
const LABEL_12860 = 'component_12860';
export function Component12860({ value = 12860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12860, 'data-value': derived.doubled }, children);
}
export default Component12860;
