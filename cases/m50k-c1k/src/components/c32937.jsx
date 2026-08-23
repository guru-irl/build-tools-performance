import React from 'react';
const LABEL_32937 = 'component_32937';
export function Component32937({ value = 32937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32937, 'data-value': derived.doubled }, children);
}
export default Component32937;
