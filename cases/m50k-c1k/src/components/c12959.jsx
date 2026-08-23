import React from 'react';
const LABEL_12959 = 'component_12959';
export function Component12959({ value = 12959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12959, 'data-value': derived.doubled }, children);
}
export default Component12959;
