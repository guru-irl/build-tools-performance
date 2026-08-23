import React from 'react';
const LABEL_16937 = 'component_16937';
export function Component16937({ value = 16937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16937, 'data-value': derived.doubled }, children);
}
export default Component16937;
