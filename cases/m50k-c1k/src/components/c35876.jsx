import React from 'react';
const LABEL_35876 = 'component_35876';
export function Component35876({ value = 35876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35876, 'data-value': derived.doubled }, children);
}
export default Component35876;
