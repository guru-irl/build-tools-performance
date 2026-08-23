import React from 'react';
const LABEL_12598 = 'component_12598';
export function Component12598({ value = 12598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12598, 'data-value': derived.doubled }, children);
}
export default Component12598;
