import React from 'react';
const LABEL_12097 = 'component_12097';
export function Component12097({ value = 12097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12097, 'data-value': derived.doubled }, children);
}
export default Component12097;
