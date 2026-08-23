import React from 'react';
const LABEL_21025 = 'component_21025';
export function Component21025({ value = 21025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21025, 'data-value': derived.doubled }, children);
}
export default Component21025;
