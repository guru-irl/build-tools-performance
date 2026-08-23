import React from 'react';
const LABEL_12631 = 'component_12631';
export function Component12631({ value = 12631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12631, 'data-value': derived.doubled }, children);
}
export default Component12631;
