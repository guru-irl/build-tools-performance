import React from 'react';
const LABEL_12037 = 'component_12037';
export function Component12037({ value = 12037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12037, 'data-value': derived.doubled }, children);
}
export default Component12037;
