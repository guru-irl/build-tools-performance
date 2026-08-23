import React from 'react';
const LABEL_46185 = 'component_46185';
export function Component46185({ value = 46185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46185, 'data-value': derived.doubled }, children);
}
export default Component46185;
