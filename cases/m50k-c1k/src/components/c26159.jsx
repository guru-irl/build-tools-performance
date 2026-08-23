import React from 'react';
const LABEL_26159 = 'component_26159';
export function Component26159({ value = 26159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26159, 'data-value': derived.doubled }, children);
}
export default Component26159;
