import React from 'react';
const LABEL_12622 = 'component_12622';
export function Component12622({ value = 12622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12622, 'data-value': derived.doubled }, children);
}
export default Component12622;
