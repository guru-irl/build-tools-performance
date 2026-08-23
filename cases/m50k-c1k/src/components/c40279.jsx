import React from 'react';
const LABEL_40279 = 'component_40279';
export function Component40279({ value = 40279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40279, 'data-value': derived.doubled }, children);
}
export default Component40279;
