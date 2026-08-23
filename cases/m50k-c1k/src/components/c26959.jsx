import React from 'react';
const LABEL_26959 = 'component_26959';
export function Component26959({ value = 26959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26959, 'data-value': derived.doubled }, children);
}
export default Component26959;
