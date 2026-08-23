import React from 'react';
const LABEL_12286 = 'component_12286';
export function Component12286({ value = 12286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12286, 'data-value': derived.doubled }, children);
}
export default Component12286;
