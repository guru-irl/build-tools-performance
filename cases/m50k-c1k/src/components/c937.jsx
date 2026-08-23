import React from 'react';
const LABEL_937 = 'component_937';
export function Component937({ value = 937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_937, 'data-value': derived.doubled }, children);
}
export default Component937;
