import React from 'react';
const LABEL_7937 = 'component_7937';
export function Component7937({ value = 7937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7937, 'data-value': derived.doubled }, children);
}
export default Component7937;
