import React from 'react';
const LABEL_12749 = 'component_12749';
export function Component12749({ value = 12749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12749, 'data-value': derived.doubled }, children);
}
export default Component12749;
