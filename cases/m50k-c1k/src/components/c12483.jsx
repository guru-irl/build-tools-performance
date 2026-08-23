import React from 'react';
const LABEL_12483 = 'component_12483';
export function Component12483({ value = 12483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12483, 'data-value': derived.doubled }, children);
}
export default Component12483;
