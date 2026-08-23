import React from 'react';
const LABEL_12990 = 'component_12990';
export function Component12990({ value = 12990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12990, 'data-value': derived.doubled }, children);
}
export default Component12990;
