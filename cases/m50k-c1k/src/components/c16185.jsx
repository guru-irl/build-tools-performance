import React from 'react';
const LABEL_16185 = 'component_16185';
export function Component16185({ value = 16185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16185, 'data-value': derived.doubled }, children);
}
export default Component16185;
