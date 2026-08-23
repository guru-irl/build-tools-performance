import React from 'react';
const LABEL_32185 = 'component_32185';
export function Component32185({ value = 32185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32185, 'data-value': derived.doubled }, children);
}
export default Component32185;
