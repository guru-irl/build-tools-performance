import React from 'react';
const LABEL_12503 = 'component_12503';
export function Component12503({ value = 12503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12503, 'data-value': derived.doubled }, children);
}
export default Component12503;
