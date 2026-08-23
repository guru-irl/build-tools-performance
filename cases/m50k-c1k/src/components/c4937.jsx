import React from 'react';
const LABEL_4937 = 'component_4937';
export function Component4937({ value = 4937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4937, 'data-value': derived.doubled }, children);
}
export default Component4937;
