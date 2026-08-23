import React from 'react';
const LABEL_9185 = 'component_9185';
export function Component9185({ value = 9185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9185, 'data-value': derived.doubled }, children);
}
export default Component9185;
