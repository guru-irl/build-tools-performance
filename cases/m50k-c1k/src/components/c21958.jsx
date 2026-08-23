import React from 'react';
const LABEL_21958 = 'component_21958';
export function Component21958({ value = 21958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21958, 'data-value': derived.doubled }, children);
}
export default Component21958;
