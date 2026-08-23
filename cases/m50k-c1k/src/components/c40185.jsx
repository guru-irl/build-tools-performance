import React from 'react';
const LABEL_40185 = 'component_40185';
export function Component40185({ value = 40185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40185, 'data-value': derived.doubled }, children);
}
export default Component40185;
