import React from 'react';
const LABEL_20959 = 'component_20959';
export function Component20959({ value = 20959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20959, 'data-value': derived.doubled }, children);
}
export default Component20959;
