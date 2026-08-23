import React from 'react';
const LABEL_15911 = 'component_15911';
export function Component15911({ value = 15911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15911, 'data-value': derived.doubled }, children);
}
export default Component15911;
