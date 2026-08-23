import React from 'react';
const LABEL_12510 = 'component_12510';
export function Component12510({ value = 12510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12510, 'data-value': derived.doubled }, children);
}
export default Component12510;
