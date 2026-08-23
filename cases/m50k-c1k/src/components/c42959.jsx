import React from 'react';
const LABEL_42959 = 'component_42959';
export function Component42959({ value = 42959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42959, 'data-value': derived.doubled }, children);
}
export default Component42959;
