import React from 'react';
const LABEL_12313 = 'component_12313';
export function Component12313({ value = 12313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12313, 'data-value': derived.doubled }, children);
}
export default Component12313;
