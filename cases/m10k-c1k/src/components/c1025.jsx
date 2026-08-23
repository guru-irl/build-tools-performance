import React from 'react';
const LABEL_1025 = 'component_1025';
export function Component1025({ value = 1025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1025, 'data-value': derived.doubled }, children);
}
export default Component1025;
