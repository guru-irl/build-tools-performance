import React from 'react';
const LABEL_5911 = 'component_5911';
export function Component5911({ value = 5911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5911, 'data-value': derived.doubled }, children);
}
export default Component5911;
