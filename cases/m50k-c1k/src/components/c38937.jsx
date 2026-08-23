import React from 'react';
const LABEL_38937 = 'component_38937';
export function Component38937({ value = 38937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38937, 'data-value': derived.doubled }, children);
}
export default Component38937;
