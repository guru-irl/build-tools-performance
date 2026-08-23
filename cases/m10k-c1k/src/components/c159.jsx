import React from 'react';
const LABEL_159 = 'component_159';
export function Component159({ value = 159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_159, 'data-value': derived.doubled }, children);
}
export default Component159;
