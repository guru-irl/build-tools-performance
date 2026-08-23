import React from 'react';
const LABEL_12081 = 'component_12081';
export function Component12081({ value = 12081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12081, 'data-value': derived.doubled }, children);
}
export default Component12081;
