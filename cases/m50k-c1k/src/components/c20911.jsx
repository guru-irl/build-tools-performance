import React from 'react';
const LABEL_20911 = 'component_20911';
export function Component20911({ value = 20911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20911, 'data-value': derived.doubled }, children);
}
export default Component20911;
