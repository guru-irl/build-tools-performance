import React from 'react';
const LABEL_12329 = 'component_12329';
export function Component12329({ value = 12329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12329, 'data-value': derived.doubled }, children);
}
export default Component12329;
