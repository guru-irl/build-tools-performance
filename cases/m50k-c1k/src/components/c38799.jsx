import React from 'react';
const LABEL_38799 = 'component_38799';
export function Component38799({ value = 38799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38799, 'data-value': derived.doubled }, children);
}
export default Component38799;
