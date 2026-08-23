import React from 'react';
const LABEL_12345 = 'component_12345';
export function Component12345({ value = 12345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12345, 'data-value': derived.doubled }, children);
}
export default Component12345;
