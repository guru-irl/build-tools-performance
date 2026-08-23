import React from 'react';
const LABEL_14911 = 'component_14911';
export function Component14911({ value = 14911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14911, 'data-value': derived.doubled }, children);
}
export default Component14911;
