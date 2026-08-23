import React from 'react';
const LABEL_24198 = 'component_24198';
export function Component24198({ value = 24198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24198, 'data-value': derived.doubled }, children);
}
export default Component24198;
