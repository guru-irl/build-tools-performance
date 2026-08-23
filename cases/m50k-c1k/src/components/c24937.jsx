import React from 'react';
const LABEL_24937 = 'component_24937';
export function Component24937({ value = 24937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24937, 'data-value': derived.doubled }, children);
}
export default Component24937;
