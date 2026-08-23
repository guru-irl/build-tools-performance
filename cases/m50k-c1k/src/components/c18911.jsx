import React from 'react';
const LABEL_18911 = 'component_18911';
export function Component18911({ value = 18911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18911, 'data-value': derived.doubled }, children);
}
export default Component18911;
