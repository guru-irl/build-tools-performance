import React from 'react';
const LABEL_37799 = 'component_37799';
export function Component37799({ value = 37799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37799, 'data-value': derived.doubled }, children);
}
export default Component37799;
