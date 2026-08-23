import React from 'react';
const LABEL_24185 = 'component_24185';
export function Component24185({ value = 24185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24185, 'data-value': derived.doubled }, children);
}
export default Component24185;
