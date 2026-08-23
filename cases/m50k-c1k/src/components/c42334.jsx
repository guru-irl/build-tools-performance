import React from 'react';
const LABEL_42334 = 'component_42334';
export function Component42334({ value = 42334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42334, 'data-value': derived.doubled }, children);
}
export default Component42334;
