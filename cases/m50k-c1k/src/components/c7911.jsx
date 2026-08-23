import React from 'react';
const LABEL_7911 = 'component_7911';
export function Component7911({ value = 7911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7911, 'data-value': derived.doubled }, children);
}
export default Component7911;
