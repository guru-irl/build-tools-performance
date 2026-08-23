import React from 'react';
const LABEL_6937 = 'component_6937';
export function Component6937({ value = 6937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6937, 'data-value': derived.doubled }, children);
}
export default Component6937;
