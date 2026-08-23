import React from 'react';
const LABEL_30799 = 'component_30799';
export function Component30799({ value = 30799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30799, 'data-value': derived.doubled }, children);
}
export default Component30799;
