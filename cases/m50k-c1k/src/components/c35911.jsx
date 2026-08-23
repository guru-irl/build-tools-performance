import React from 'react';
const LABEL_35911 = 'component_35911';
export function Component35911({ value = 35911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35911, 'data-value': derived.doubled }, children);
}
export default Component35911;
