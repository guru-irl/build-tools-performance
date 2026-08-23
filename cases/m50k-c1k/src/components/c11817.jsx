import React from 'react';
const LABEL_11817 = 'component_11817';
export function Component11817({ value = 11817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11817, 'data-value': derived.doubled }, children);
}
export default Component11817;
