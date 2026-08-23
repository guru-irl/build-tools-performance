import React from 'react';
const LABEL_6911 = 'component_6911';
export function Component6911({ value = 6911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6911, 'data-value': derived.doubled }, children);
}
export default Component6911;
