import React from 'react';
const LABEL_35025 = 'component_35025';
export function Component35025({ value = 35025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35025, 'data-value': derived.doubled }, children);
}
export default Component35025;
