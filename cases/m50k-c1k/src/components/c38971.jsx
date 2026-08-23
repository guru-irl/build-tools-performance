import React from 'react';
const LABEL_38971 = 'component_38971';
export function Component38971({ value = 38971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38971, 'data-value': derived.doubled }, children);
}
export default Component38971;
