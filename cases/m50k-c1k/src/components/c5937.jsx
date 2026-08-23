import React from 'react';
const LABEL_5937 = 'component_5937';
export function Component5937({ value = 5937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5937, 'data-value': derived.doubled }, children);
}
export default Component5937;
