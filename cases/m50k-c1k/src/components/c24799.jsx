import React from 'react';
const LABEL_24799 = 'component_24799';
export function Component24799({ value = 24799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24799, 'data-value': derived.doubled }, children);
}
export default Component24799;
