import React from 'react';
const LABEL_32279 = 'component_32279';
export function Component32279({ value = 32279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32279, 'data-value': derived.doubled }, children);
}
export default Component32279;
