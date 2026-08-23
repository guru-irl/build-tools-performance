import React from 'react';
const LABEL_10937 = 'component_10937';
export function Component10937({ value = 10937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10937, 'data-value': derived.doubled }, children);
}
export default Component10937;
