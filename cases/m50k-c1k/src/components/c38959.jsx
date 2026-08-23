import React from 'react';
const LABEL_38959 = 'component_38959';
export function Component38959({ value = 38959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38959, 'data-value': derived.doubled }, children);
}
export default Component38959;
