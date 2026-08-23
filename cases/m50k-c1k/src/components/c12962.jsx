import React from 'react';
const LABEL_12962 = 'component_12962';
export function Component12962({ value = 12962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12962, 'data-value': derived.doubled }, children);
}
export default Component12962;
