import React from 'react';
const LABEL_9084 = 'component_9084';
export function Component9084({ value = 9084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9084, 'data-value': derived.doubled }, children);
}
export default Component9084;
