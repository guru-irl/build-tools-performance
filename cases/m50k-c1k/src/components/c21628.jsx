import React from 'react';
const LABEL_21628 = 'component_21628';
export function Component21628({ value = 21628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21628, 'data-value': derived.doubled }, children);
}
export default Component21628;
