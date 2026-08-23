import React from 'react';
const LABEL_12948 = 'component_12948';
export function Component12948({ value = 12948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12948, 'data-value': derived.doubled }, children);
}
export default Component12948;
