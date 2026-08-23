import React from 'react';
const LABEL_16799 = 'component_16799';
export function Component16799({ value = 16799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16799, 'data-value': derived.doubled }, children);
}
export default Component16799;
