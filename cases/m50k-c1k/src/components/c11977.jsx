import React from 'react';
const LABEL_11977 = 'component_11977';
export function Component11977({ value = 11977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11977, 'data-value': derived.doubled }, children);
}
export default Component11977;
