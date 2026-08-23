import React from 'react';
const LABEL_42799 = 'component_42799';
export function Component42799({ value = 42799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42799, 'data-value': derived.doubled }, children);
}
export default Component42799;
