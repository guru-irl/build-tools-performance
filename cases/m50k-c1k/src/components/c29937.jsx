import React from 'react';
const LABEL_29937 = 'component_29937';
export function Component29937({ value = 29937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29937, 'data-value': derived.doubled }, children);
}
export default Component29937;
