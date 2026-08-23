import React from 'react';
const LABEL_23937 = 'component_23937';
export function Component23937({ value = 23937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23937, 'data-value': derived.doubled }, children);
}
export default Component23937;
