import React from 'react';
const LABEL_12077 = 'component_12077';
export function Component12077({ value = 12077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12077, 'data-value': derived.doubled }, children);
}
export default Component12077;
