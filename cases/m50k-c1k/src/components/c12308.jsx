import React from 'react';
const LABEL_12308 = 'component_12308';
export function Component12308({ value = 12308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12308, 'data-value': derived.doubled }, children);
}
export default Component12308;
