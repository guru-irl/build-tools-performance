import React from 'react';
const LABEL_21937 = 'component_21937';
export function Component21937({ value = 21937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21937, 'data-value': derived.doubled }, children);
}
export default Component21937;
