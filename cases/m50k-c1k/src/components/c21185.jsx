import React from 'react';
const LABEL_21185 = 'component_21185';
export function Component21185({ value = 21185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21185, 'data-value': derived.doubled }, children);
}
export default Component21185;
