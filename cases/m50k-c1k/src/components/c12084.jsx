import React from 'react';
const LABEL_12084 = 'component_12084';
export function Component12084({ value = 12084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12084, 'data-value': derived.doubled }, children);
}
export default Component12084;
