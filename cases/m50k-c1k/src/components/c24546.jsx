import React from 'react';
const LABEL_24546 = 'component_24546';
export function Component24546({ value = 24546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24546, 'data-value': derived.doubled }, children);
}
export default Component24546;
