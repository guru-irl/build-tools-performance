import React from 'react';
const LABEL_12554 = 'component_12554';
export function Component12554({ value = 12554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12554, 'data-value': derived.doubled }, children);
}
export default Component12554;
