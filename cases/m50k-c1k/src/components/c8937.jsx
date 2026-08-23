import React from 'react';
const LABEL_8937 = 'component_8937';
export function Component8937({ value = 8937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8937, 'data-value': derived.doubled }, children);
}
export default Component8937;
