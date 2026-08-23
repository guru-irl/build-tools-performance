import React from 'react';
const LABEL_14159 = 'component_14159';
export function Component14159({ value = 14159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14159, 'data-value': derived.doubled }, children);
}
export default Component14159;
