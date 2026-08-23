import React from 'react';
const LABEL_1937 = 'component_1937';
export function Component1937({ value = 1937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1937, 'data-value': derived.doubled }, children);
}
export default Component1937;
