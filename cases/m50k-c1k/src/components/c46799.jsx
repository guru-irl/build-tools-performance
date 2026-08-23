import React from 'react';
const LABEL_46799 = 'component_46799';
export function Component46799({ value = 46799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46799, 'data-value': derived.doubled }, children);
}
export default Component46799;
