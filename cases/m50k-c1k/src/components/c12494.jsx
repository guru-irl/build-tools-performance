import React from 'react';
const LABEL_12494 = 'component_12494';
export function Component12494({ value = 12494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12494, 'data-value': derived.doubled }, children);
}
export default Component12494;
