import React from 'react';
const LABEL_279 = 'component_279';
export function Component279({ value = 279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_279, 'data-value': derived.doubled }, children);
}
export default Component279;
