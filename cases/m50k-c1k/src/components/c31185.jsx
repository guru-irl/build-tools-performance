import React from 'react';
const LABEL_31185 = 'component_31185';
export function Component31185({ value = 31185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31185, 'data-value': derived.doubled }, children);
}
export default Component31185;
