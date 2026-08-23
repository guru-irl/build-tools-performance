import React from 'react';
const LABEL_12660 = 'component_12660';
export function Component12660({ value = 12660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12660, 'data-value': derived.doubled }, children);
}
export default Component12660;
