import React from 'react';
const LABEL_37185 = 'component_37185';
export function Component37185({ value = 37185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37185, 'data-value': derived.doubled }, children);
}
export default Component37185;
