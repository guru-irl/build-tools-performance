import React from 'react';
const LABEL_39937 = 'component_39937';
export function Component39937({ value = 39937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39937, 'data-value': derived.doubled }, children);
}
export default Component39937;
