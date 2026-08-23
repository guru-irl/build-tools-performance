import React from 'react';
const LABEL_1185 = 'component_1185';
export function Component1185({ value = 1185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1185, 'data-value': derived.doubled }, children);
}
export default Component1185;
