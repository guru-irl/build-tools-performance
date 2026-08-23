import React from 'react';
const LABEL_24604 = 'component_24604';
export function Component24604({ value = 24604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24604, 'data-value': derived.doubled }, children);
}
export default Component24604;
