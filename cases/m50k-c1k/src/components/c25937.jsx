import React from 'react';
const LABEL_25937 = 'component_25937';
export function Component25937({ value = 25937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25937, 'data-value': derived.doubled }, children);
}
export default Component25937;
