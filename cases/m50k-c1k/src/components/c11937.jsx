import React from 'react';
const LABEL_11937 = 'component_11937';
export function Component11937({ value = 11937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11937, 'data-value': derived.doubled }, children);
}
export default Component11937;
