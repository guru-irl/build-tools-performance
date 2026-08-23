import React from 'react';
const LABEL_12423 = 'component_12423';
export function Component12423({ value = 12423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12423, 'data-value': derived.doubled }, children);
}
export default Component12423;
