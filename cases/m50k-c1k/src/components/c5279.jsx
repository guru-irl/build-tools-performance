import React from 'react';
const LABEL_5279 = 'component_5279';
export function Component5279({ value = 5279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5279, 'data-value': derived.doubled }, children);
}
export default Component5279;
