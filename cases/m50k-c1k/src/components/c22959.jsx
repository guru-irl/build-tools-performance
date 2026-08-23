import React from 'react';
const LABEL_22959 = 'component_22959';
export function Component22959({ value = 22959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22959, 'data-value': derived.doubled }, children);
}
export default Component22959;
