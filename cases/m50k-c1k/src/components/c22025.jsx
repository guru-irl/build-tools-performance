import React from 'react';
const LABEL_22025 = 'component_22025';
export function Component22025({ value = 22025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22025, 'data-value': derived.doubled }, children);
}
export default Component22025;
