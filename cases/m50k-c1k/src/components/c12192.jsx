import React from 'react';
const LABEL_12192 = 'component_12192';
export function Component12192({ value = 12192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12192, 'data-value': derived.doubled }, children);
}
export default Component12192;
