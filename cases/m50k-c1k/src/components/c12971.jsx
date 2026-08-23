import React from 'react';
const LABEL_12971 = 'component_12971';
export function Component12971({ value = 12971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12971, 'data-value': derived.doubled }, children);
}
export default Component12971;
