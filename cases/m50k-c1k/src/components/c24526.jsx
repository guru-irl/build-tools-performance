import React from 'react';
const LABEL_24526 = 'component_24526';
export function Component24526({ value = 24526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24526, 'data-value': derived.doubled }, children);
}
export default Component24526;
