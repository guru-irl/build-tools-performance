import React from 'react';
const LABEL_35959 = 'component_35959';
export function Component35959({ value = 35959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35959, 'data-value': derived.doubled }, children);
}
export default Component35959;
