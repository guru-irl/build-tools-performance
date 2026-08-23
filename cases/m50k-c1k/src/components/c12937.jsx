import React from 'react';
const LABEL_12937 = 'component_12937';
export function Component12937({ value = 12937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12937, 'data-value': derived.doubled }, children);
}
export default Component12937;
