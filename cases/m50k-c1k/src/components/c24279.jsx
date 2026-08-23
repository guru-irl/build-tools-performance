import React from 'react';
const LABEL_24279 = 'component_24279';
export function Component24279({ value = 24279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24279, 'data-value': derived.doubled }, children);
}
export default Component24279;
