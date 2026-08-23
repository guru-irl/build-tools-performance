import React from 'react';
const LABEL_8185 = 'component_8185';
export function Component8185({ value = 8185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8185, 'data-value': derived.doubled }, children);
}
export default Component8185;
