import React from 'react';
const LABEL_32911 = 'component_32911';
export function Component32911({ value = 32911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32911, 'data-value': derived.doubled }, children);
}
export default Component32911;
