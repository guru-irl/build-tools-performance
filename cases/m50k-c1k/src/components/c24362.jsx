import React from 'react';
const LABEL_24362 = 'component_24362';
export function Component24362({ value = 24362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24362, 'data-value': derived.doubled }, children);
}
export default Component24362;
