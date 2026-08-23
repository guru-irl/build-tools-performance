import React from 'react';
const LABEL_23185 = 'component_23185';
export function Component23185({ value = 23185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23185, 'data-value': derived.doubled }, children);
}
export default Component23185;
