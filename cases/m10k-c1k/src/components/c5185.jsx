import React from 'react';
const LABEL_5185 = 'component_5185';
export function Component5185({ value = 5185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5185, 'data-value': derived.doubled }, children);
}
export default Component5185;
