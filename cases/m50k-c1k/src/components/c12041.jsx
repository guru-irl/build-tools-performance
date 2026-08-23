import React from 'react';
const LABEL_12041 = 'component_12041';
export function Component12041({ value = 12041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12041, 'data-value': derived.doubled }, children);
}
export default Component12041;
