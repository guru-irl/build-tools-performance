import React from 'react';
const LABEL_2185 = 'component_2185';
export function Component2185({ value = 2185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2185, 'data-value': derived.doubled }, children);
}
export default Component2185;
