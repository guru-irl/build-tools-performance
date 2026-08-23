import React from 'react';
const LABEL_13937 = 'component_13937';
export function Component13937({ value = 13937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13937, 'data-value': derived.doubled }, children);
}
export default Component13937;
