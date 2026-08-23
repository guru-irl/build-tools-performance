import React from 'react';
const LABEL_7799 = 'component_7799';
export function Component7799({ value = 7799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7799, 'data-value': derived.doubled }, children);
}
export default Component7799;
