import React from 'react';
const LABEL_13185 = 'component_13185';
export function Component13185({ value = 13185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13185, 'data-value': derived.doubled }, children);
}
export default Component13185;
