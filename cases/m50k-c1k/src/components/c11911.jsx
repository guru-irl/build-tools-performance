import React from 'react';
const LABEL_11911 = 'component_11911';
export function Component11911({ value = 11911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11911, 'data-value': derived.doubled }, children);
}
export default Component11911;
