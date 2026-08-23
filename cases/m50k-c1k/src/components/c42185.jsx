import React from 'react';
const LABEL_42185 = 'component_42185';
export function Component42185({ value = 42185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42185, 'data-value': derived.doubled }, children);
}
export default Component42185;
