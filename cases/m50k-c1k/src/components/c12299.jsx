import React from 'react';
const LABEL_12299 = 'component_12299';
export function Component12299({ value = 12299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12299, 'data-value': derived.doubled }, children);
}
export default Component12299;
