import React from 'react';
const LABEL_12287 = 'component_12287';
export function Component12287({ value = 12287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12287, 'data-value': derived.doubled }, children);
}
export default Component12287;
