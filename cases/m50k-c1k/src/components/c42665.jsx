import React from 'react';
const LABEL_42665 = 'component_42665';
export function Component42665({ value = 42665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42665, 'data-value': derived.doubled }, children);
}
export default Component42665;
