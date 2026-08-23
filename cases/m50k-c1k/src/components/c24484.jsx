import React from 'react';
const LABEL_24484 = 'component_24484';
export function Component24484({ value = 24484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24484, 'data-value': derived.doubled }, children);
}
export default Component24484;
