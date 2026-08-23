import React from 'react';
const LABEL_39185 = 'component_39185';
export function Component39185({ value = 39185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39185, 'data-value': derived.doubled }, children);
}
export default Component39185;
