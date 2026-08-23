import React from 'react';
const LABEL_24202 = 'component_24202';
export function Component24202({ value = 24202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24202, 'data-value': derived.doubled }, children);
}
export default Component24202;
