import React from 'react';
const LABEL_24423 = 'component_24423';
export function Component24423({ value = 24423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24423, 'data-value': derived.doubled }, children);
}
export default Component24423;
