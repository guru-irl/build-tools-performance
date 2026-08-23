import React from 'react';
const LABEL_799 = 'component_799';
export function Component799({ value = 799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_799, 'data-value': derived.doubled }, children);
}
export default Component799;
