import React from 'react';
const LABEL_26937 = 'component_26937';
export function Component26937({ value = 26937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26937, 'data-value': derived.doubled }, children);
}
export default Component26937;
