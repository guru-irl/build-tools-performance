import React from 'react';
const LABEL_12696 = 'component_12696';
export function Component12696({ value = 12696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12696, 'data-value': derived.doubled }, children);
}
export default Component12696;
