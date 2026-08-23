import React from 'react';
const LABEL_15185 = 'component_15185';
export function Component15185({ value = 15185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15185, 'data-value': derived.doubled }, children);
}
export default Component15185;
