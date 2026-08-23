import React from 'react';
const LABEL_12820 = 'component_12820';
export function Component12820({ value = 12820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12820, 'data-value': derived.doubled }, children);
}
export default Component12820;
