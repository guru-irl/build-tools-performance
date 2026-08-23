import React from 'react';
const LABEL_31065 = 'component_31065';
export function Component31065({ value = 31065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31065, 'data-value': derived.doubled }, children);
}
export default Component31065;
