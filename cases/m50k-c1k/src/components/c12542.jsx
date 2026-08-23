import React from 'react';
const LABEL_12542 = 'component_12542';
export function Component12542({ value = 12542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12542, 'data-value': derived.doubled }, children);
}
export default Component12542;
