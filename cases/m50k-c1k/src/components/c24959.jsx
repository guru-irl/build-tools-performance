import React from 'react';
const LABEL_24959 = 'component_24959';
export function Component24959({ value = 24959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24959, 'data-value': derived.doubled }, children);
}
export default Component24959;
