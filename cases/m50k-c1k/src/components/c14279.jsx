import React from 'react';
const LABEL_14279 = 'component_14279';
export function Component14279({ value = 14279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14279, 'data-value': derived.doubled }, children);
}
export default Component14279;
