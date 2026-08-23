import React from 'react';
const LABEL_15279 = 'component_15279';
export function Component15279({ value = 15279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15279, 'data-value': derived.doubled }, children);
}
export default Component15279;
