import React from 'react';
const LABEL_5959 = 'component_5959';
export function Component5959({ value = 5959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5959, 'data-value': derived.doubled }, children);
}
export default Component5959;
