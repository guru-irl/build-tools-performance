import React from 'react';
const LABEL_12461 = 'component_12461';
export function Component12461({ value = 12461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12461, 'data-value': derived.doubled }, children);
}
export default Component12461;
