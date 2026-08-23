import React from 'react';
const LABEL_17937 = 'component_17937';
export function Component17937({ value = 17937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17937, 'data-value': derived.doubled }, children);
}
export default Component17937;
