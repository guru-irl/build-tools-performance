import React from 'react';
const LABEL_12711 = 'component_12711';
export function Component12711({ value = 12711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12711, 'data-value': derived.doubled }, children);
}
export default Component12711;
