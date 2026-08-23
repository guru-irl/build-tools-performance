import React from 'react';
const LABEL_35971 = 'component_35971';
export function Component35971({ value = 35971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35971, 'data-value': derived.doubled }, children);
}
export default Component35971;
