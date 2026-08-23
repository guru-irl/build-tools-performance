import React from 'react';
const LABEL_12181 = 'component_12181';
export function Component12181({ value = 12181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12181, 'data-value': derived.doubled }, children);
}
export default Component12181;
