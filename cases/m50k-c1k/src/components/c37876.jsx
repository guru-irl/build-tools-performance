import React from 'react';
const LABEL_37876 = 'component_37876';
export function Component37876({ value = 37876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37876, 'data-value': derived.doubled }, children);
}
export default Component37876;
