import React from 'react';
const LABEL_20185 = 'component_20185';
export function Component20185({ value = 20185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20185, 'data-value': derived.doubled }, children);
}
export default Component20185;
