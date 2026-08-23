import React from 'react';
const LABEL_34185 = 'component_34185';
export function Component34185({ value = 34185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34185, 'data-value': derived.doubled }, children);
}
export default Component34185;
