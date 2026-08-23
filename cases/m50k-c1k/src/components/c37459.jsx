import React from 'react';
const LABEL_37459 = 'component_37459';
export function Component37459({ value = 37459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37459, 'data-value': derived.doubled }, children);
}
export default Component37459;
