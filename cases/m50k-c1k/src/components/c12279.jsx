import React from 'react';
const LABEL_12279 = 'component_12279';
export function Component12279({ value = 12279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12279, 'data-value': derived.doubled }, children);
}
export default Component12279;
