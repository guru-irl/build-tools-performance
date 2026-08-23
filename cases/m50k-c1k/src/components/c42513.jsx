import React from 'react';
const LABEL_42513 = 'component_42513';
export function Component42513({ value = 42513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42513, 'data-value': derived.doubled }, children);
}
export default Component42513;
