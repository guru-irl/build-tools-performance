import React from 'react';
const LABEL_24416 = 'component_24416';
export function Component24416({ value = 24416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24416, 'data-value': derived.doubled }, children);
}
export default Component24416;
