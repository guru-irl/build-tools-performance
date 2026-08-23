import React from 'react';
const LABEL_10911 = 'component_10911';
export function Component10911({ value = 10911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10911, 'data-value': derived.doubled }, children);
}
export default Component10911;
