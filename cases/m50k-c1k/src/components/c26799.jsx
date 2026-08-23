import React from 'react';
const LABEL_26799 = 'component_26799';
export function Component26799({ value = 26799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26799, 'data-value': derived.doubled }, children);
}
export default Component26799;
