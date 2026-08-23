import React from 'react';
const LABEL_23446 = 'component_23446';
export function Component23446({ value = 23446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23446, 'data-value': derived.doubled }, children);
}
export default Component23446;
