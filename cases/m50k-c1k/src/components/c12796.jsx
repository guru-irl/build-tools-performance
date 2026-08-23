import React from 'react';
const LABEL_12796 = 'component_12796';
export function Component12796({ value = 12796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12796, 'data-value': derived.doubled }, children);
}
export default Component12796;
