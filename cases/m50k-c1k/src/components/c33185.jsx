import React from 'react';
const LABEL_33185 = 'component_33185';
export function Component33185({ value = 33185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33185, 'data-value': derived.doubled }, children);
}
export default Component33185;
