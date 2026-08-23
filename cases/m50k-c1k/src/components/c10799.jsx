import React from 'react';
const LABEL_10799 = 'component_10799';
export function Component10799({ value = 10799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10799, 'data-value': derived.doubled }, children);
}
export default Component10799;
