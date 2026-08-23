import React from 'react';
const LABEL_35605 = 'component_35605';
export function Component35605({ value = 35605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35605, 'data-value': derived.doubled }, children);
}
export default Component35605;
