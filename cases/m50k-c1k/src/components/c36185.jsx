import React from 'react';
const LABEL_36185 = 'component_36185';
export function Component36185({ value = 36185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36185, 'data-value': derived.doubled }, children);
}
export default Component36185;
