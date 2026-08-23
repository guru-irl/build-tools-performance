import React from 'react';
const LABEL_10185 = 'component_10185';
export function Component10185({ value = 10185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10185, 'data-value': derived.doubled }, children);
}
export default Component10185;
