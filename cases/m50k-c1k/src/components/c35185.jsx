import React from 'react';
const LABEL_35185 = 'component_35185';
export function Component35185({ value = 35185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35185, 'data-value': derived.doubled }, children);
}
export default Component35185;
