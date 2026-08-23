import React from 'react';
const LABEL_17185 = 'component_17185';
export function Component17185({ value = 17185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17185, 'data-value': derived.doubled }, children);
}
export default Component17185;
