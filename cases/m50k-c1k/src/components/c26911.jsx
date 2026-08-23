import React from 'react';
const LABEL_26911 = 'component_26911';
export function Component26911({ value = 26911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26911, 'data-value': derived.doubled }, children);
}
export default Component26911;
