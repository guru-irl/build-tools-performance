import React from 'react';
const LABEL_38593 = 'component_38593';
export function Component38593({ value = 38593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38593, 'data-value': derived.doubled }, children);
}
export default Component38593;
