import React from 'react';
const LABEL_24025 = 'component_24025';
export function Component24025({ value = 24025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24025, 'data-value': derived.doubled }, children);
}
export default Component24025;
