import React from 'react';
const LABEL_12372 = 'component_12372';
export function Component12372({ value = 12372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12372, 'data-value': derived.doubled }, children);
}
export default Component12372;
