import React from 'react';
const LABEL_44268 = 'component_44268';
export function Component44268({ value = 44268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44268, 'data-value': derived.doubled }, children);
}
export default Component44268;
