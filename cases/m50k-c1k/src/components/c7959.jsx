import React from 'react';
const LABEL_7959 = 'component_7959';
export function Component7959({ value = 7959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7959, 'data-value': derived.doubled }, children);
}
export default Component7959;
