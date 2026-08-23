import React from 'react';
const LABEL_44185 = 'component_44185';
export function Component44185({ value = 44185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44185, 'data-value': derived.doubled }, children);
}
export default Component44185;
