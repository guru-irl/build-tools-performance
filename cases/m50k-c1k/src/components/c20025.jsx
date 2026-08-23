import React from 'react';
const LABEL_20025 = 'component_20025';
export function Component20025({ value = 20025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20025, 'data-value': derived.doubled }, children);
}
export default Component20025;
